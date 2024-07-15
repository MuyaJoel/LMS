import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const Login = () => {
  const { setUser } = useContext(AuthContext);
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
        {withCredentials: true}
      );
      localStorage.setItem('token',response.data.token)
      setUser(response.data);
      navigate('/home');
      setMessage("Login successful");
      // Handle storing token or user information as needed
    } catch (error) {
      setMessage("Login failed!...register");
    }
  };

  return (
    <div>
      <h2>Login</h2>
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
        <br /> <br />
        <button type="submit">Login</button>
      </form> <br />
      <p><Link>forgot passord</Link></p>
      <p>Not a User: <Link to="/register">click to register</Link> </p>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
