import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Footer from "./Footer";

function Portfolio() {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen">
      <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-3"
        >
          <div className="w-4 h-4 rounded-full bg-yellow-500 animate-pulse"></div>
          <h1 className="text-3xl font-bold text-gray-800">Saurav Shete</h1>
        </motion.div>
        <Navbar />
      </header>

      <main className="flex flex-col lg:flex-row justify-center items-center lg:space-x-12 py-16 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="rounded-full w-64 h-64 overflow-hidden shadow-lg border-4 border-white"
        >
          <img
            src="https://img.freepik.com/premium-vector/beard-man-avatar_96853-399.jpg"
            alt="Profile"
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-lg text-center lg:text-left mt-8 lg:mt-0"
        >
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Hello, I'm <span className="text-yellow-500">Saurav</span>
          </h1>
          <p className="text-gray-600 mt-4 text-lg leading-relaxed">
            A bit about me: I'm a passionate developer dedicated to creating
            user-friendly applications that make a difference. With a keen eye
            for design and a love for clean code, I bring ideas to life through
            innovative solutions.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mt-8 justify-center lg:justify-start">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume"
              className="w-32 h-32 rounded-full bg-red-500 flex items-center justify-center text-white font-medium hover:bg-red-600 transition-colors">
              Resume
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/projects"
              className="w-32 h-32 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium hover:bg-blue-600 transition-colors"
            >
              Projects
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="w-32 h-32 rounded-full bg-teal-400 flex items-center justify-center text-white font-medium hover:bg-teal-500 transition-colors"  >
              Contact
            </motion.a>
          </div>
        </motion.div>
      </main>

    </div>
  );
};

export default Portfolio;
