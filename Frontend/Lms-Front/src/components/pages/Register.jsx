import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Stack } from "@chakra-ui/react";
import "./login.css"

const Register = () => {
  const navigate=useNavigate()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    //to prevent defaults
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:3000/api/users", {
        name,
        email,
        password,
        role,
      });
      setMessage("User registered successfully");
      navigate("/login")
    } catch (error) {
      setMessage("Registration failed");
    }
  };

  return (
    <Stack marginTop="50px">    
    <div className="form-container">    
      <form onSubmit={handleSubmit}>
      <h2>Register to @LearnCoding! </h2>
        <label className="form-label">Name:</label> <br />
        <input
          type="text"
          className="form-control"
          value={name}
          placeholder="joel muya"
          onChange={(e) => setName(e.target.value)}
          required
        />{" "}
        <br />
        <label className="form-label">Email:</label> <br />
        <input
          type="email"
          className="form-control"
          value={email}
          placeholder="example@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
          required
        />{" "}
        <br />
        <label className="form-label">Password:</label> <br />
        <input
          type="password"
          className="form-control"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />{" "}
        <br />
        <label className="form-label">Role</label> <br />
        <input
          type="text"
          className="form-control"
          value={role}
          placeholder="student / instructor / admin"
          onChange={(e) => setRole(e.target.value)}
          required
        />{" "}
        <br />
        <button type="submit" className="btn btn-primary">Register</button>
        <br /> <br />
        <p>
        Already have an account.<Link to="/login">Click to login</Link>
        </p>
      </form>
      
      </div>
      <br />
      <br />
      <div className="d-flex justify-content-center">
        {message && <p>{message}</p>}
      </div>
    </Stack>
  );
};

export default Register;
