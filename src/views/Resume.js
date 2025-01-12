import React from 'react'
import Footer from './Footer'
import Navbar from '../components/Navbar'

function Resume() {
  return (

        <div>
            <Navbar/>
        <div className="bg-gray-100 text-gray-800 font-sans">
      {/* Header Section */}
      <header className="bg-blue-500 text-white py-10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold">Saurav Shete</h1>
          <p className="text-lg mt-2">Full-Stack Developer | Problem Solver | Innovator</p>
          <p className="mt-4">Email: your.sauravshete9@gmail.com | Phone: (123) 456-7890</p>
          <p className="mt-2">LinkedIn | GitHub | Portfolio</p>
        </div>
      </header>

      {/* About Section */}
      <section className="bg-white py-10">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-blue-500">About Me</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            I am a passionate full-stack developer with expertise in building web applications
            that deliver exceptional user experiences. Skilled in React, Node.js, and Tailwind CSS,
            I am dedicated to solving challenging problems and creating impactful solutions.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-blue-500">Experience</h2>
          <div className="mt-6">
            <div className="mb-4">
              <h3 className="text-xl font-bold">Software Developer</h3>
              <p className="text-sm text-gray-600">ABC Company | Jan 2022 - Present</p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>Developed responsive web applications using React and Node.js.</li>
                <li>Collaborated with cross-functional teams to design scalable solutions.</li>
                <li>Optimized performance and improved codebase efficiency by 30%.</li>
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-bold">Intern - Frontend Developer</h3>
              <p className="text-sm text-gray-600">XYZ Company | Jun 2021 - Dec 2021</p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>Created user-friendly UI components with Tailwind CSS and React.</li>
                <li>Improved website accessibility and user experience.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

     
      <section className="bg-white py-10">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-blue-500">Education</h2>
          <div className="mt-6">
            <div className="mb-4">
              <h3 className="text-xl font-bold">Bachelor of Science in Computer Science</h3>
              <p className="text-sm text-gray-600">University of Example | 2018 - 2022</p>
              <p className="mt-2 text-gray-700">
                Graduated with honors, focusing on software development and web technologies.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="py-10">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-blue-500">Skills</h2>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <span className="bg-gray-200 px-4 py-2 rounded-full text-gray-700">React</span>
            <span className="bg-gray-200 px-4 py-2 rounded-full text-gray-700">Node.js</span>
            <span className="bg-gray-200 px-4 py-2 rounded-full text-gray-700">Tailwind CSS</span>
            <span className="bg-gray-200 px-4 py-2 rounded-full text-gray-700">JavaScript</span>
            <span className="bg-gray-200 px-4 py-2 rounded-full text-gray-700">MongoDB</span>
            <span className="bg-gray-200 px-4 py-2 rounded-full text-gray-700">Git</span>
          </div>
        </div>
      </section>
      <Footer/>
        </div>
        </div>
  )
}

export default Resume
