import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'

const Hom = () => {
  return (
    <>
    <h2>@LearnCoding!</h2>
    <p>Welcome, to our innovative Learning Management System, where education meets technology  <br /> to create an immersive and efficient learning experience.</p>
    <p>Learners are equiped with basic to advanced skills in any programing language of the choice.</p>
    <p>#Learn coding fast......<Link to="/login">Click to Getstarted!!</Link></p>
    </>
  )
}

export default Hom