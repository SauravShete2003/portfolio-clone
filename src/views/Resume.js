import React from 'react'
import Footer from './Footer'
import Navbar from '../components/Navbar'

function Resume() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Header Section */}
        <header className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-12 px-6 rounded-lg shadow-lg mb-8 transform hover:scale-105 transition-transform duration-300">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-2">Saurav Shete</h1>
            <p className="text-xl sm:text-2xl mb-4">Full-Stack Developer | Problem Solver | Innovator</p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <a href="mailto:sauravshete9@gmail.com" className="text-white hover:text-blue-200 transition-colors duration-300">
                sauravshete9@gmail.com
              </a>
              <span className="hidden sm:inline">|</span>
              <a href="tel:+1234567890" className="text-white hover:text-blue-200 transition-colors duration-300">
                (123) 456-7890
              </a>
            </div>
            <div className="mt-4 flex justify-center space-x-4">
              <a href="#" className="text-white hover:text-blue-200 transition-colors duration-300">LinkedIn</a>
              <a href="#" className="text-white hover:text-blue-200 transition-colors duration-300">GitHub</a>
              <a href="#" className="text-white hover:text-blue-200 transition-colors duration-300">Portfolio</a>
            </div>
          </div>
        </header>

        {/* About Section */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8 transform hover:scale-102 transition-transform duration-300">
          <h2 className="text-3xl font-semibold text-blue-600 mb-4">About Me</h2>
          <p className="text-gray-700 leading-relaxed">
            I am a passionate full-stack developer with expertise in building web applications
            that deliver exceptional user experiences. Skilled in React, Node.js, and Tailwind CSS,
            I am dedicated to solving challenging problems and creating impactful solutions.
          </p>
        </section>

        {/* Experience Section */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-3xl font-semibold text-blue-600 mb-6">Experience</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4 animate-fadeIn">
              <h3 className="text-xl font-bold text-gray-800">Software Developer</h3>
              <p className="text-sm text-gray-600 mb-2">ABC Company | Jan 2022 - Present</p>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Developed responsive web applications using React and Node.js.</li>
                <li>Collaborated with cross-functional teams to design scalable solutions.</li>
                <li>Optimized performance and improved codebase efficiency by 30%.</li>
              </ul>
            </div>
            <div className="border-l-4 border-blue-500 pl-4 animate-fadeIn animation-delay-300">
              <h3 className="text-xl font-bold text-gray-800">Intern - Frontend Developer</h3>
              <p className="text-sm text-gray-600 mb-2">XYZ Company | Jun 2021 - Dec 2021</p>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Created user-friendly UI components with Tailwind CSS and React.</li>
                <li>Improved website accessibility and user experience.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8 transform hover:scale-102 transition-transform duration-300">
          <h2 className="text-3xl font-semibold text-blue-600 mb-4">Education</h2>
          <div>
            <h3 className="text-xl font-bold text-gray-800">Bachelor of Science in Computer Science</h3>
            <p className="text-sm text-gray-600 mb-2">University of Example | 2018 - 2022</p>
            <p className="text-gray-700">
              Graduated with honors, focusing on software development and web technologies.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-3xl font-semibold text-blue-600 mb-4">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {['React', 'Node.js', 'Tailwind CSS', 'JavaScript', 'MongoDB', 'Git'].map((skill, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold animate-fadeIn" style={{animationDelay: `${index * 100}ms`}}>
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Resume

