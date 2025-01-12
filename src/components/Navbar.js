import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white shadow-md py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to={"/"} className="text-xl font-bold text-gray-800 mr-4 pb-1">
          MyPortfolio
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button
          className="block md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
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
        <div className="hidden md:flex space-x-8">
          <NavLink href="/resume" color="blue">
            Resume
          </NavLink>
          <NavLink href="/projects" color="red">
            Projects
          </NavLink>
          <NavLink href="/contact" color="green">
            Contact
          </NavLink>
        </div>

        {/* Mobile Links */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md py-4 px-6 flex flex-col space-y-4">
            <NavLink href="/resume" color="blue" mobile onClick={closeMenu}>
              Resume
            </NavLink>
            <NavLink href="/projects" color="red" mobile onClick={closeMenu}>
              Projects
            </NavLink>
            <NavLink href="/contact" color="green" mobile onClick={closeMenu}>
              Contact
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ href, children, mobile, onClick }) => (
  <Link
    to={href}
    className={`group ${mobile ? "text-lg" : "text-xl"}`}
    onClick={onClick}
  >
    <span
      className={`text-gray-800 font-semibold
      )}] transition duration-300`}
    >
      {children}
    </span>
    {!mobile && (
      <div
        className={`w-0 group-hover:w-full h-0.5 
        )}] transition-all duration-300 mt-1 mx-auto`}
      ></div>
    )}
  </Link>
);

export default Navbar;
