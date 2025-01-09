import React from "react";
import Footer from "./Footer";
import Navabar from "../components/Navabar";

const Projects = () => {
  const projectData = [
    {
      title: "Project One",
      description:
        "A modern portfolio website showcasing responsive design and interactivity. Built with React and Tailwind CSS.",
      image:
        "https://img.freepik.com/premium-vector/illustration-landing-page_176048-94.jpg?semt=ais_hybrid",
    },
    {
      title: "Project Two",
      description:
        "A powerful e-commerce platform designed with scalability in mind. Features include product management, cart functionality, and payment integration.",
      image:
        "https://img.freepik.com/free-vector/start-up-project-landing-page-with-rocket_52683-7933.jpg",
    },
    {
      title: "Project Three",
      description:
        "A task management app to organize daily activities with a clean and intuitive interface. Includes drag-and-drop and notification features.",
      image:
        "https://img.freepik.com/free-vector/organic-flat-motiongraphics-landing-page_23-2148899169.jpg",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <Navabar />

      {/* Projects Section */}
      <div className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Projects
          </h2>

          <div className="space-y-12">
            {projectData.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:shadow-lg hover:scale-105 flex flex-col md:flex-row"
              >
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="md:w-1/2 w-full h-64 md:h-auto object-cover"
                />

                {/* Project Details */}
                <div className="p-6 flex flex-col justify-center md:w-1/2">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-gray-600">{project.description}</p>
                  <button
                    className="mt-6 bg-blue-500 text-white py-2 px-6 rounded-full font-semibold text-lg shadow-md hover:bg-blue-600 focus:outline-none transition duration-300 self-start"
                  >
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Projects;
