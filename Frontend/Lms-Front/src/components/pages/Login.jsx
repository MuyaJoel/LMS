import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./login.css";
import { Stack, Image } from "@chakra-ui/react";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    try {
      const response = await axios.post(
        "http://127.0.0.1:3000/api/users/login",
        { email, password },
        { withCredentials: true }
      );
      // const { token, user } = response.data;
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      // console.log(response.data.user);

      navigate("/home");
      setMessage(`Logging Successfully..!!!`);
      setIsLoading(false);
    } catch (error) {
      localStorage.removeItem("token");
      setMessage(`Login failed!...register first!!! `);
      setIsLoading(false);
    }
  };

  const isDisabled = !isLoading || email == " " || password.length < 6;

  return (
    <Stack marginTop="80px">
      <div className="d-flex justify-content-center">
        <Image
          height="80px"
          width="80px"
          borderRadius="40px"
          src="https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?cs=srgb&amp;dl=pexels-pixabay-159866.jpg&amp;fm=jpg"
          alt="Book Image"
        />
      </div>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h2>Login to @LearnCoding! </h2>
          <div className="mb-3">
            <label className="form-label">Email:</label>
            <br />
            <input
              type="email"
              className="form-control"
              value={email}
              placeholder="example@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <br />
          <div className="mb-3">
            <label className="form-label">Password:</label>
            <br />
            <input
              type="password"
              className="form-control"
              value={password}
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <br />
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isDisabled}
          >
            {isLoading ? "Login" : "Loading.."}
          </button>
          <br /> <br />
          <p>
            <Link to="/forgot">forgot passord</Link>
          </p>
          <p>
            Not a User: <Link to="/register">click to register</Link>
          </p>
        </form>
      </div>
      <div className="d-flex justify-content-center">
        <em> {message && <p>{message}</p>} </em>
      </div>
    </Stack>
  );
};

export default Login;
