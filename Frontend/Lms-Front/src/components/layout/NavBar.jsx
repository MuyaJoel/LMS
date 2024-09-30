import React from "react";
import { Link } from "react-router-dom";
import { Image } from "@chakra-ui/react";
import Logout from "../pages/Logout";
import "./index.css"

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
      <Image height="30px" width="30px" borderRadius="20px"
          src="https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?cs=srgb&amp;dl=pexels-pixabay-159866.jpg&amp;fm=jpg"
          alt="Book Image"
        />
        <Link to="/home">Home</Link>
        <Link to="/dashboard">Courses</Link>
        <Link to="/newcourse">New Courses</Link>
        <Link to="/assignment">Assignments</Link>
        <Logout />
      </div>
    </nav>
  );
};

export default NavBar;
