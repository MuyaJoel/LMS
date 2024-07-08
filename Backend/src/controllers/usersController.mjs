import { PrismaClient } from "@prisma/client";
import { validationResult, matchedData } from "express-validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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
    //check is the user exists
    const existingUser = await prisma.Users.findUnique({
      where: { id: parseId },
    });

    if (!existingUser) {
      return res.status(404).json({
        status: "error",
        message: "User not found",
      });
    }

    //Update the user data
    const updatedUser = await prisma.Users.update({
      where: { id: parseId },
      data: { ...data },
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
  const { userEmail, userPassword } = req;

  const data = matchedData(req);

  const psd = await bcrypt.compare(data.password, userPassword);

  if (userEmail && psd) {
    const token = jwt.sign({ email: userEmail }, secretKey, {
      expiresIn: "5s",
    });
    res.status(200).json({
      status: "success",
      data: { token },
    });
  } else {
    res.status(401).json({
      message: "Invalid credentials",
    });
  }
};
