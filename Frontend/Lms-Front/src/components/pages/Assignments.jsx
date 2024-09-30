import React, { useState } from "react";
import NavBar from "../layout/NavBar";
import axios from "axios";
import { Stack } from "@chakra-ui/react";
import "./login.css";
const Assignments = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [courseId, setCourseId] = useState("");
  const [userId, setUserId] = useState("");
  const [message, SetMessage] = useState("");
  const [file, setFile] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://127.0.0.1:3000/api/upload",
        { title, description, courseId, userId, file },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      SetMessage("Submitted successfully...!!");
    } catch (error) {
      SetMessage("Not submitted...!!");
    }
  };
  return (
    <Stack className="form-container" marginTop="30px">
      <form onSubmit={handleSubmit} className="form-group">
        <h2>Submit Assignment</h2>
        <label className="form-label">Title</label> <br />
        <input
          type="text"
          className="form-control"
          value={title}
          placeholder="Title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          required
        />{" "}
        <br />
        <label className="form-label">Description</label> <br />
        <input
          type="text"
          className="form-control"
          value={description}
          placeholder="description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          required
        />{" "}
        <br />
        <label className="form-label">Upload</label> <br />
        <input
          type="file"
          className="form-control"
          name="assignment"
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
          required
        />{" "}
        <br />
        <label className="form-label">CourseId</label> <br />
        <input
          type="text"
          className="form-control"
          value={courseId}
          placeholder="courseId"
          onChange={(e) => {
            setCourseId(e.target.value);
          }}
          required
        />{" "}
        <br />
        <label className="form-label">UserId</label> <br />
        <input
          type="text"
          className="form-control"
          value={userId}
          placeholder="userId"
          onChange={(e) => {
            setUserId(e.target.value);
          }}
          required
        />{" "}
        <br /> <br />
        <button type="submit" className="btn btn-primary">
          submit
        </button>
      </form>
      {message && <p>{message}</p>}
    </Stack>
  );
};

export default Assignments;
