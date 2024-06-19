import React from 'react'
import { Link } from 'react-router-dom'

const Student = () => {
  return (
    <div> <button title="new"><Link to="/student/create-student">student</Link></button></div>
  )
}

export default Student