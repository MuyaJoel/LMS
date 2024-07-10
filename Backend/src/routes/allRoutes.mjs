import express from "express";
import multer from "multer";
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

import { createAssignment, getAllAssignments, getAssignmentById } from "../controllers/assignmentsContollers.mjs";

const router = express.Router();

//users
router.get("/users/", getUsers);
router.post("/users/", checkSchema(userSchema), createUser);
router.get("/users/:id", resolveIndex, checkSchema(userSchema), getUserById);
router.put("/users/:id", resolveIndex, checkSchema(userSchema), updateUser);
router.patch("/users/:id", resolveIndex, checkSchema(userSchema), patchUser);
router.delete("/users/:id", resolveIndex, deleteUser);

//user login
router.post("/users/login/",checkSchema(loginSchema), loginUser)

//user logout
router.post("/users/logout/",checkSchema(loginSchema),logoutUser)

//courses
router.get("/courses/",getCourses);
router.post("/courses/",checkSchema(courseSchema), authorizeRoles('instructor'), createCourse);
router.get(
  "/courses/:id",
  resolveCourseIndex,
  checkSchema(courseSchema),
  getCourse
);
router.delete("/courses/:id", authorizeRoles('instructor'), resolveCourseIndex, deleteCourse);

//assignments
const upload=multer({dest: 'uploads/'})

router.post('/upload',upload.single('file'),createAssignment)
router.get('/assignments',getAllAssignments)
router.get('/assignments/:id',getAssignmentById)

export default router;
