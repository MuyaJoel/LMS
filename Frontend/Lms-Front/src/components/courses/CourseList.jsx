import React, { useEffect, useState } from "react";
import { Card, CardBody, Heading, SimpleGrid, Text , Stack} from "@chakra-ui/react";
import getCourses from "../../services/courseService.mjs";
import NavBar from "../layout/NavBar";

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
    <Stack marginTop="30px">
      <div className="d-flex justify-content-center">
        <h2>Welcome, View Our Courses page!!</h2>
      </div>
      <div className="d-flex justify-content-between" >
        {courses.length > 0 ? (
          <div>
            <SimpleGrid
              columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
              spacing={6}
              padding="20px"
            >
              {courses.map((course) => (
                <Card className="card " key={course.id}>
                  <CardBody>
                    {/* <Heading>Id:{course.id}</Heading> */}
                    <Heading fontSize="2xl">{course.title}</Heading>
                    <Text>{course.description}</Text>
                    <Text>
                      <strong>Email:</strong> <a href={course.email}>{course.email} </a>
                    </Text>
                    <Text>
                      <strong>Content:</strong>
                      {course.content}
                    </Text>
                    <Heading fontSize="md">
                      <strong>Instructor:</strong> {course.instructor}
                    </Heading>
                    <button className="btn btn-primary">Enroll Course</button>
                  </CardBody>
                </Card>
              ))}
            </SimpleGrid>
          </div>
        ) : (
          <p>No courses available</p>
        )}
      </div>
    </Stack>
  );
};

export default CourseList;
