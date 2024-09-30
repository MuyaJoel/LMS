import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { Stack } from "@chakra-ui/react";

const Hom = () => {
  return (
    <Stack marginTop="10%">
      <h2 className="d-flex justify-content-center">@LearnCoding!</h2>
      <p className="d-flex justify-content-center">
        Welcome, to our innovative Learning Management System, where education
        meets technology <br /> to create an immersive and efficient learning
        experience.
      </p>
      <p className="d-flex justify-content-center">
        Learners are equiped with basic to advanced skills in any programing
        language of the choice.
      </p>
      <p className="d-flex justify-content-center">
        #Learn coding fast......<Link to="/login">Click to Getstarted!!</Link>
      </p>
    </Stack>
  );
};

export default Hom;
