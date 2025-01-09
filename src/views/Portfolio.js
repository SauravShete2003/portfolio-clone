import React from "react";
import Navbar from "../components/Navabar";

const Portfolio = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="flex justify-between items-center px-6 py-4">
        <div className="flex items-center space-x-3">
          <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
          <h1 className="text-xl font-bold text-gray-800">Saurav Shete</h1>
          <span className="text-sm text-gray-500">Editor</span>
        </div>
        <Navbar />
      </header>

      <main className="flex flex-col lg:flex-row justify-center items-center lg:space-x-12 py-10 px-6">

        <div className="rounded-full w-64 h-64 overflow-hidden shadow-md">
          <img
            src="https://img.freepik.com/premium-vector/beard-man-avatar_96853-399.jpg"
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="max-w-lg text-center lg:text-left mt-8 lg:mt-0">
          <h1 className="text-4xl font-bold text-gray-800">Hello</h1>
          <p className="text-gray-600 mt-4 text-lg">
            A bit about me: I'm a developer passionate about creating
            user-friendly applications. Click below to explore more about my
            work and get in touch!
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mt-8 justify-center lg:justify-start">
            <a
              href="/resume"
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              Resume
            </a>
            <a
              href="/projects"
              className="bg-gradient-to-r from-red-400 to-red-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              Projects
            </a>
            <a
              href="/contact"
              className="bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              Contact
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
