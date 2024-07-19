import React from 'react';
import { Link } from 'react-router-dom';
import Logout from './pages/Logout';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/dashboard">Courses</Link></li>
        <li><Link to="/newcourse">New Courses</Link></li>
        <li><Link to="/assignment">Submit Assignments</Link></li>
        <li><Logout /></li>
      </ul>
    </nav>
  );
};

export default NavBar;
