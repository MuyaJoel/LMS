import React, { useState } from 'react';
import axios from 'axios';

const CreateCourse = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [instructor, setInstructor] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:3000/api/courses', {
        title,
        description,
        instructor,
        email,
        content,
      });
      setMessage('Course created successfully');
    } catch (error) {
      console.error(error);
      setMessage('Failed to create course');
    }
  };

  return (
    <div>
      <h2>Register New Course</h2>
      <form onSubmit={handleSubmit}>
          <label>Title:</label> <br />
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required /> <br />
          <label>Description:</label> <br />
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required /> <br />
          <label>Instructor:</label> <br />
          <input type="text" value={instructor} onChange={(e) => setInstructor(e.target.value)} required /> <br />
          <label>Email:</label> <br />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /> <br />
          <label>Content:</label> <br />
          <textarea value={content} onChange={(e) => setContent(e.target.value)} required></textarea> <br />
        <button type="submit">Create Course</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CreateCourse;
