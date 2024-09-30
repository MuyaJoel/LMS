import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {Stack} from "@chakra-ui/react"
import "./login.css"

const Home = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
      const storedUser = localStorage.getItem("user");
      if (!token && !storedUser) {
        navigate("/login");
      }
      try {
        const userData = storedUser ? JSON.parse(storedUser) : null;
        if (userData) {
          setUser(userData);
          // console.log(userData);
        } else {
          throw new Error("User Data is null");
        }
      } catch (error) {
        console.log("Error User Data:");
        navigate("/login");
      }
    };
    fetchUserData();
  }, [navigate]);

  if (!user) {
    return <p>Loading....!</p>;
  }
  return (
    <Stack marginTop="30px">
      <div>
        <h2><span>Welcome</span>, {user.name}.!</h2>
      </div>
      <br />
      <br />
      <h3 className="d-flex justify-content-center">
        We are greatful to have you on board, @LearnCoding!. Which is a Learning
        Management system.
      </h3>

      <p className="d-flex justify-content-center">
        {" "}
        <i>Learn Coding with the best Platform......</i>
      </p>
      <p className="d-flex justify-content-center">
        Our LMS is designed with educators in mind, offering a comprehensive
        suite of tools to manage courses, assignments, and student interactions
        seamlessly.
      </p>
      <p className="d-flex justify-content-center">
        Creating a course has never been easier. With our intuitive interface,
        educators can quickly set up courses, outline modules, and add learning
        materials in various formats, <em>i.e</em> PDFs.
      </p>
      <p className="d-flex justify-content-center">
        Our powerful analytics provide deep insights into student engagement and
        performance, helping educators tailor their teaching strategies for
        maximum impact.
      </p>
      <p className="d-flex justify-content-center">
        Join the revolution in education with our Learning Management System.
        Empowering educators, inspiring students, and transforming learning
        experiences.
      </p>
    </Stack>
  );
};

export default Home;
