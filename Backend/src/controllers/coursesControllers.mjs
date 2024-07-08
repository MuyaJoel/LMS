import { PrismaClient } from "@prisma/client";
import { matchedData, validationResult } from "express-validator";

const prisma = new PrismaClient();

//Get all Courses
export const getCourses = async (req, res) => {
  const courses = await prisma.Courses.findMany();
  try {
    console.log(courses)
    return res.status(200).json({
      status: "Success",
      data: { courses },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
//Get particular Course
export const getCourse = async (req, res) => {
  const { findCourse } = req;
  try {
    if (findCourse) {
      res.status(200).json({
        status: "Success",
        data: { findCourse },
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};
//Post new Courses
export const createCourse = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: "validation failed",
      data: { errors },
    });
  }

  const data = matchedData(req);
  try {
    const newCourse = await prisma.Courses.create({
      data: { ...data },
    });
    res.status(201).json({
      status: "success",
      data: { newCourse },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
//delete Course
export const deleteCourse = async (req, res) => {
  const {parseId}=req
  await prisma.Courses.delete({
    where: {id : parseId}
  })
  res.sendStatus(200)
};
