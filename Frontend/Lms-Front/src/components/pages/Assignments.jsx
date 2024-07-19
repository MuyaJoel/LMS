import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import axios from "axios";

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
          headers:{
             "Content-Type":"multipart/form-data"        
          },
          withCredentials: true }
      );
      SetMessage("Submitted successfully...!!");
    } catch (error) {
      SetMessage("Not submitted...!!");
    }
  };
  return (
    <div>
      <NavBar />
      <h2>Submit Assignment</h2>
      <form onSubmit={handleSubmit}>
        <label>Title</label> <br />
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          required
        />{" "}
        <br />
        <label>Description</label> <br />
        <input
          type="text"
          value={description}
          placeholder="description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          required
        />{" "}
        <br />
        <label>Upload</label> <br />
        <input
          type="file"
          name="assignment"
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
          required
        />{" "}
        <br />
        <label>CourseId</label> <br />
        <input
          type="text"
          value={courseId}
          placeholder="courseId"
          onChange={(e) => {
            setCourseId(e.target.value);
          }}
          required
        />{" "}
        <br />
        <label>UserId</label> <br />
        <input
          type="text"
          value={userId}
          placeholder="userId"
          onChange={(e) => {
            setUserId(e.target.value);
          }}
          required
        />{" "}
        <br /> <br />
        <button type="submit">submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Assignments;
