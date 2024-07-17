import React, { useState } from "react";
import axios from "axios";

const Register = () => {
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
    } catch (error) {
      setMessage("Registration failed");
    }
  };

  return (
    <div>
      <h2>Register to @LearnCoding! </h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label> <br />
        <input
          type="text"
          value={name}
          placeholder="joel muya"
          onChange={(e) => setName(e.target.value)}
          required
        />{" "}
        <br />
        <label>Email:</label> <br />
        <input
          type="email"
          value={email}
          placeholder="example@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
          required
        />{" "}
        <br />
        <label>Password:</label> <br />
        <input
          type="password"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />{" "}
        <br />
        <label>Role</label> <br />
        <input
          type="text"
          value={role}
          placeholder="student / instructor / admin"
          onChange={(e) => setRole(e.target.value)}
          required
        />{" "}
        <br /> <br />
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Register;
