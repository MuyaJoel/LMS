import React, { useState } from "react";
import axios from "axios";
import { Stack } from "@chakra-ui/react";
import "./course.css";

const CreateCourse = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [instructor, setInstructor] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:3000/api/courses", {
        title,
        description,
        instructor,
        email,
        content,
      });
      setMessage("Course created successfully");
    } catch (error) {
      console.error(error);
      setMessage("Failed to create course");
    }
  };

  return (
    <Stack className="form-container" marginTop="30px">
      <form onSubmit={handleSubmit}>
        <h2>Register New Course</h2>
        <label className="form-label">Title:</label> <br />
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />{" "}
        <br />
        <label className="form-label">Description:</label> <br />
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />{" "}
        <br />
        <label className="form-label">Instructor:</label> <br />
        <input
          type="text"
          className="form-control"
          value={instructor}
          onChange={(e) => setInstructor(e.target.value)}
          required
        />{" "}
        <br />
        <label className="form-label">Email:</label> <br />
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />{" "}
        <br />
        <label className="form-label">Content:</label> <br />
        <textarea
          value={content}
          className="form-control"
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>{" "}
        <br /> <br />
        <button type="submit" className="btn btn-primary">
          Create Course
        </button>
      </form>
      {message && <p>{message}</p>}
    </Stack>
  );
};

export default CreateCourse;
