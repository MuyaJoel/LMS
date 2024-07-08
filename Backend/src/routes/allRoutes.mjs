import express from "express";
import { checkSchema } from "express-validator";
import loginSchema from "../middlewares/loginSchema.mjs";
import userSchema from "../middlewares/userSchema.mjs";
import resolveIndex from "../middlewares/userValidation.mjs";
import courseSchema from "../middlewares/courseSchema.mjs";
import resolveCourseIndex from "../middlewares/courseValidation.mjs";
import authorizeRoles from "../middlewares/rolesMiddlewares.mjs";
import authenticateJWT from "../middlewares/authMiddlewares.mjs";
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  patchUser,
  deleteUser,
  loginUser,
  logoutUser,
} from "../controllers/usersController.mjs";

import {
  getCourses,
  getCourse,
  createCourse,
  deleteCourse,
} from "../controllers/coursesControllers.mjs";

const router = express.Router();

//users
router.get("/user/", getUsers);
router.post("/user/", checkSchema(userSchema), createUser);
router.get("/user/:id", resolveIndex, checkSchema(userSchema), getUserById);
router.put("/user/:id", resolveIndex, checkSchema(userSchema), updateUser);
router.patch("/user/:id", resolveIndex, checkSchema(userSchema), patchUser);
router.delete("/user/:id", resolveIndex, deleteUser);

//user login
router.post("/user/login/",checkSchema(loginSchema), loginUser)

//user logout
router.post("/user/logout/",checkSchema(loginSchema),logoutUser)

//courses
router.get("/course/", authorizeRoles('instructor','student'),getCourses);
router.post("/course/",checkSchema(courseSchema), authorizeRoles('instructor'), createCourse);
router.get(
  "/course/:id",
  authorizeRoles('instructor','student'),
  resolveCourseIndex,
  checkSchema(courseSchema),
  getCourse
);
router.delete("/course/:id", authorizeRoles('instructor'), resolveCourseIndex, deleteCourse);

export default router;
