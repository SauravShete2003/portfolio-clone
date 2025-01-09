import React from "react";
import { Linkedin, Instagram } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-100 py-10 px-6">
      {/* Divider */}
      <hr className="mb-8 border-gray-300" />

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Phone Section */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone</h3>
          <a
            href="tel:8856962503"
            className="text-gray-600 hover:text-blue-500 text-lg"
          >
            +91 8856962503
          </a>
        </div>

        {/* Email Section */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
          <a
            href="mailto:sauravshete72@gmail.com"
            className="text-gray-600 hover:text-blue-500 text-lg"
          >
            sauravshete72@gmail.com
          </a>
        </div>

        {/* Social Links Section */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Follow Me</h3>
          <div className="flex justify-center md:justify-start space-x-6 mt-2">
            <a
              href="https://www.linkedin.com/in/sauravshete/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition duration-300"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="https://www.instagram.com/sauravshete/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-pink-600 transition duration-300"
            >
              <Instagram size={28} />
            </a>
          </div>
        </div>

        {/* Footer Branding */}
        <div className="col-span-1 sm:col-span-2 md:col-span-1 mt-6 md:mt-0 text-gray-600 text-sm">
          <p className="text-center md:text-left">
            © 2025 by <span className="font-semibold text-gray-800">Saurav Shete</span>.
            <br />
            Powered and secured by <span className="font-semibold text-blue-500">React</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
