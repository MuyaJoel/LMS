import React, { useState, useEffect } from "react";
import getCourses from "../../services/courseService.mjs";
import axios from "axios";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        // const response = await axios.get('http://127.0.0.1:3000/api/courses', { withCredentials: true });
        const response = await getCourses();
        if (Array.isArray(response)) {
          setCourses(response);
        } else {
          setCourses([]);
          setError("Fetched data is not an array");
        }
      } catch (err) {
        setError("Error fetching courses");
        console.error(err);
      }
    };

    fetchCourses();
  }, []);
  console.log(courses);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
    <h2>Courses</h2>
    <div>
     
      {courses.length > 0 ? (
        <div className="courses">
        <ul>
          {courses.map((course) => (
            <li key={course.id}>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <p>
                <strong>Instructor:</strong> {course.instructor}
              </p>
              <p>
                <strong>Email:</strong> <a href="">{course.email} </a>
              </p>
              <p>
                <strong>Content:</strong>
                {course.content}
              </p>
            </li>
          ))}
        </ul>
        </div>
      ) : (
        <p>No courses available</p>
      )}
    </div>
    </>
  );
};

export default CourseList;
