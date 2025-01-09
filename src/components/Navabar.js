import React from 'react'
import { Link } from "react-router-dom";
function Navabar() {
  return (
    <nav className="space-x-6">
              <Link to="/resume">
              <span className="text-gray-800 hover:text-blue-500 text-xl">Resume</span>
              </Link>
              <Link to="/projects">
              <span className="text-gray-800 hover:text-blue-500 text-xl">Projects</span>
              </Link>
              <Link to="/contact" className="text-gray-800 hover:text-blue-500 text-xl">
                Contact
              </Link>
            </nav>
  )
}

export default Navabar
