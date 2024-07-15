import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import DashBoard from "./components/pages/CourseListPage";
import CreateCoursePage from "./components/pages/CreateCoursePage";
import PrivateRoute from "./components/PrivateRoute";
import NavBar from "./components/NavBar";
import Logout from "./components/pages/Logout";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          
          <NavBar />

          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route element={<PrivateRoute />}>
              <Route path="/home" element={<Home />} />
              <Route path="/dashboard" element={<DashBoard />} />
              <Route path="/newcourse" element={<CreateCoursePage />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
