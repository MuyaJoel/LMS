import React, { useState } from "react";
import { Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(
        "http://127.0.0.1:3000/api/users/update",
        { email, password },
        { withCredentials: true }
      );
      setMessage("Password update successfully!");
      navigate("/login");
    } catch (error) {
      setMessage("Failed to update Password");
    }
  };
  return (
    <Stack marginTop="80px">
      <div className="form-container">
        <form onSubmit={handlesubmit}>
          <h3>Forgot Password</h3>
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            placeholder="email@example.com"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <label className="form-label">NewPassword</label>
          <input
            type="password"
            className="form-control"
            value={password}
            placeholder="new password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />{" "}
          <br />
          <button className="btn btn-primary" type="submit">
            submit
          </button>
          <br />
          <em> {message && <p>{message}</p>} </em>
        </form>
      </div>
    </Stack>
  );
};

export default ForgotPassword;
