import React from "react";
import { createBrowserRouter } from "react-router-dom"; 
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import DashBoard from "./components/pages/CourseListPage";
import CreateCoursePage from "./components/pages/CreateCoursePage";
import PrivateRoute from "./components/auth/PrivateRoute";
import Hom from "./components/pages/Hom";
import Assignments from "./components/pages/Assignments";
import Layout from "./components/layout/Layout";
import ForgotPassword from "./components/pages/forgotPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/dashboard", element: <DashBoard /> },
      { path: "/newcourse", element: <CreateCoursePage /> },
      { path: "/assignment", element: <Assignments /> },
    ],
  },
  { index: true, element: <Hom /> },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
  { path: "/forgot", element: <ForgotPassword /> },
]);

export default router;
