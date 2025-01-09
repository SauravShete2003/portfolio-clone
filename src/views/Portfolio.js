import React from "react";
import Navabar from "../components/Navabar";

const Portfolio = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="flex justify-between items-center px-8 py-2">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 rounded-full bg-yellow-500">
          </div>
          <h1 className="text-2xl font-bold">Saurav Shete</h1>
          <span className="text-gray-500">Editor</span>
        </div>
        <Navabar/>
      </header>

      <main className="flex flex-col lg:flex-row justify-center items-center lg:space-x-12 py-10 px-4 mt-12">
        <div className="rounded-full w-80 h-80 overflow-hidden shadow-lg">
          <img
            src="https://img.freepik.com/premium-vector/beard-man-avatar_96853-399.jpg"
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="max-w-lg text-center lg:text-left mt-8 lg:mt-0">
          <h1 className="text-6xl font-bold">Hello</h1>
          <p className="text-gray-700 mt-4 text-xl">
            A Bit About Me: I'm a paragraph. Click here to add your own text and
            edit me. I'm a great place for you to tell a story and let your
            users know a little more about you.
          </p>

          <div className="flex space-x-6 mt-8 justify-center lg:justify-start">
            <a
              href="/resume"
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 hover:from-yellow-500 hover:to-yellow-700 text-lg"
            >
              Resume
            </a>
            <a
              href="/projects"
              className="bg-gradient-to-r from-red-400 to-red-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 hover:from-red-500 hover:to-red-700 text-lg"
            >
              Projects
            </a>
            <a
              href="/contact"
              className="bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 hover:from-blue-500 hover:to-blue-700 text-lg"
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
