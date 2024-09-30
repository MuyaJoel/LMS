import { PrismaClient } from "@prisma/client";
import { validationResult, matchedData } from "express-validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const prisma = new PrismaClient();

const secretKey = process.env.JWT_SECRET_KEY;

//getting all users in the database
export const getUsers = async (req, res) => {
  try {
    const users = await prisma.Users.findMany();
    console.log(users);
    return res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

//getting a specific user
export const getUserById = async (req, res) => {
  const { findUser } = req;
  try {
    if (findUser) {
      res.status(200).json({
        status: "success",
        data: { findUser },
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "User not found",
    });
  }
};

//creating a user
export const createUser = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: "Validation failed",
      data: { errors },
    });
  }

  const data = matchedData(req);

  try {
    const hashedpsd = await bcrypt.hash(data.password, 10);
    const user = await prisma.Users.create({
      data: { ...data, password: hashedpsd },
    });
    res.status(201).json({
      status: "success",
      data: { user },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

//Updating a user
export const updateUser = async (req, res) => {
  const { parseId } = req;
  const data = matchedData(req);

  try {
    const updateObj = await prisma.Users.update({
      where: { id: parseId },
      data: { ...data },
    });
    res.status(201).json({
      status: "success",
      data: { updateObj },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

//patching a user or changing a particular field in the object
export const patchUser = async (req, res) => {
  const { parseId } = req;
  const data = matchedData(req);

  try {
    const hashpsd= await bcrypt.hash(data.password, 10)
    //check is the user exists
    const existingUser = await prisma.Users.findUnique({
      where: { email: data.email },
    });

    if (!existingUser) {
      return res.status(404).json({
        status: "error",
        message: "User not found",
      });
    }

    //Update the user data
    const updatedUser = await prisma.Users.update({
      where: { email: data.email },
      data: { ...data, password: hashpsd },
    });

    console.log("User Updated");
    res.status(200).json({
      status: "success",
      data: { updatedUser },
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

//delete a user
export const deleteUser = async (req, res) => {
  const { parseId } = req;
  await prisma.Users.delete({
    where: { id: parseId },
  });

  res.sendStatus(200);
};

//login
export const loginUser = async (req, res) => {
  const data = matchedData(req);

  const user = await prisma.Users.findUnique({
    where: { email: data.email },
  });

  if (!user) return res.sendStatus(401);

  const psd = await bcrypt.compare(data.password, user.password);

  if (user.email && psd) {
    const token = jwt.sign(
      { email: user.email, id: user.id },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );

    res.cookie("token", token, {
      httpOnly: true,
      signed: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.status(200).json({
      status: "success",
      message: "Logged in Successfully",
      data: {
        token,
        user,
      },
      token,
      user,
    });
  } else {
    res.status(401).json({
      message: "Invalid credentials",
    });
  }
};

//logout user
export const logoutUser = (req, res) => {
  res.clearCookie("token");
  res.send({ message: "Logged out successfully" });
};

//userProfile
export const getUserProfile = async (req, res) => {
  try {
    const user = await prisma.Users.findUnique({
      where: { id: req.user.id },
      select: { id: true, name: true, email: true },
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({
      user,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
