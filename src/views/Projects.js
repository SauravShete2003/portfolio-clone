import React from "react";
import Footer from "./Footer";
import Navbar from "../components/Navbar";

const Projects = () => {
  const projectData = [
    {
      title: "Modern Portfolio",
      description:
        "A sleek portfolio website showcasing responsive design and interactivity. Built with React and Tailwind CSS.",
      image:
        "https://img.freepik.com/premium-vector/illustration-landing-page_176048-94.jpg?semt=ais_hybrid",
      tags: ["React", "Tailwind CSS", "Responsive Design"],
    },
    {
      title: "E-commerce Platform",
      description:
        "A robust e-commerce solution designed with scalability in mind. Features include product management, cart functionality, and secure payment integration.",
      image:
        "https://img.freepik.com/free-vector/start-up-project-landing-page-with-rocket_52683-7933.jpg",
      tags: ["Node.js", "Express", "MongoDB", "React"],
    },
    {
      title: "Task Master",
      description:
        "An intuitive task management app to organize daily activities. Includes drag-and-drop functionality, notifications, and team collaboration features.",
      image:
        "https://img.freepik.com/free-vector/organic-flat-motiongraphics-landing-page_23-2148899169.jpg",
      tags: ["React Native", "Firebase", "Redux"],
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      <Navbar />

      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-16 relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              My Projects
            </span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-600 rounded-full"></span>
          </h2>

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {projectData.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-semibold text-lg shadow-md hover:bg-gray-100 focus:outline-none transition duration-300">
                      View Project
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl shadow-2xl p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to start a project?
          </h3>
          <p className="text-xl text-blue-100 mb-8">
            Let's collaborate and bring your ideas to life!
          </p>
          <button className="bg-white text-blue-600 py-3 px-8 rounded-full font-bold text-lg shadow-md hover:bg-gray-100 focus:outline-none transition duration-300">
            Get in Touch
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;