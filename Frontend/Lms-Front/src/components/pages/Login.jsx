import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:3000/api/users/login",
        { email, password },
        { withCredentials: true }
      );
      // const { token, user } = response.data;
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      console.log(response.data.user);

      navigate("/home");
      setMessage(`Logging Successfully..!!!`);
    } catch (error) {
      localStorage.removeItem("token");
      setMessage(`Login failed!...register first!!! `);
    }
  };

  return (
    <div>
      <img
        src="https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?cs=srgb&amp;dl=pexels-pixabay-159866.jpg&amp;fm=jpg"
        alt="Book Image"
      />
      <h2>Login to @LearnCoding! </h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <br />
        <input
          type="email"
          value={email}
          placeholder="example@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
          required
        />{" "}
        <br />
        <label>Password:</label>
        <br />
        <input
          type="password"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />{" "}
        <p>
          <Link>forgot passord</Link>
        </p>{" "}
        <button type="submit">Login</button>
      </form>{" "}
      <p>
        Not a User: <Link to="/register">click to register</Link>{" "}
      </p>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
