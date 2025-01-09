import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to={'/'} className="text-xl font-bold text-gray-800 mr-4 pb-1">MyPortfolio</Link>

        {/* Hamburger Menu for Mobile */}
        <button
          className="block md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Links */}
        <div className={`md:flex space-x-8 hidden ${isOpen ? "block" : ""}`}>
          <Link
            to="/resume"
            className="group"
          >
            <span className="text-gray-800 text-xl font-semibold group-hover:text-blue-500 transition duration-300">
              Resume
            </span>
            <div className="w-0 group-hover:w-full h-0.5 bg-blue-500 transition-all duration-300 mt-1 mx-auto"></div>
          </Link>
          <Link
            to="/projects"
            className="group"
          >
            <span className="text-gray-800 text-xl font-semibold group-hover:text-red-500 transition duration-300">
              Projects
            </span>
            <div className="w-0 group-hover:w-full h-0.5 bg-red-500 transition-all duration-300 mt-1 mx-auto"></div>
          </Link>
          <Link
            to="/contact"
            className="group"
          >
            <span className="text-gray-800 text-xl font-semibold group-hover:text-green-500 transition duration-300">
              Contact
            </span>
            <div className="w-0 group-hover:w-full h-0.5 bg-green-500 transition-all duration-300 mt-1 mx-auto"></div>
          </Link>
        </div>

        {/* Mobile Links */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-4 mt-4">
            <Link
              to="/resume"
              className="text-gray-800 text-lg font-semibold hover:text-blue-500"
            >
              Resume
            </Link>
            <Link
              to="/projects"
              className="text-gray-800 text-lg font-semibold hover:text-red-500"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="text-gray-800 text-lg font-semibold hover:text-green-500"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
