import React from "react";

const Portfolio = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="flex justify-between items-center px-8 py-2">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
          <h1 className="text-lg font-bold">Saurav Shete</h1>
          <span className="text-gray-500">Editor</span>
        </div>
        <nav className="space-x-6">
          <a href="#resume" className="text-gray-800 hover:text-blue-500">
            Resume
          </a>
          <a href="#projects" className="text-gray-800 hover:text-blue-500">
            Projects
          </a>
          <a href="#contact" className="text-gray-800 hover:text-blue-500">
            Contact
          </a>
        </nav>
      </header>

      <main className="flex flex-col lg:flex-row justify-center items-center lg:space-x-12 py-10 px-4 mt-12">
        <div className="rounded-full w-72 h-72 overflow-hidden shadow-lg">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7AR5iFpr7tkS-WPgmKJ-sh9T110WhV5k4Kg&s"
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="max-w-lg text-center lg:text-left mt-8 lg:mt-0">
          <h1 className="text-6xl font-bold">Hello</h1>
          <p className="text-gray-700 mt-4">
            A Bit About Me: I'm a paragraph. Click here to add your own text and
            edit me. I'm a great place for you to tell a story and let your
            users know a little more about you.
          </p>

          <div className="flex space-x-6 mt-8 justify-center lg:justify-start">
            <a
              href="#resume"
              className="bg-yellow-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-yellow-600"
            >
              Resume
            </a>
            <a
              href="#projects"
              className="bg-red-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-red-600"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-600"
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
