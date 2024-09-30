import React from 'react'
import "./index.css"

const Sidebar = () => {
  return (
    <div className='div-sidebar'>
        <a href="/home">DashBoard</a>
        <a href="/dashboard">Courses</a>
        <a href="/newcourse">New Course</a>
        <a href="/assignment">Assignments</a>
    </div>
  )
}

export default Sidebar