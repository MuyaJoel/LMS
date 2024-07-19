import React, { useEffect, useState } from "react";
import NavBar from "../NavBar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
        if(userData){
          setUser(userData);
        console.log(userData);
        }else{
          throw new Error("User Data is null")
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
    <div>
      <NavBar />
      <h1>Welcome, {user.name}</h1>
      <h3>We are greatful to have you on board, @LearnCoding!. Which is a Learning Management system.</h3>
      <p> <i>Learn Coding with the best Platform......</i></p>
      <p>
        Our LMS is designed with educators in mind, offering a comprehensive
        suite of tools to manage courses, assignments, and student interactions
        seamlessly.
      </p>
      <p>
        Creating a course has never been easier. With our intuitive interface,
        educators can quickly set up courses, outline modules, and add learning
        materials in various formats, <em>i.e</em> PDFs.
      </p>
      <p>
        Our powerful analytics provide deep insights into student engagement and
        performance, helping educators tailor their teaching strategies for
        maximum impact.
      </p>
      <p>
        Join the revolution in education with our Learning Management System.
        Empowering educators, inspiring students, and transforming learning
        experiences.
      </p>
    </div>
  );
};

export default Home;
