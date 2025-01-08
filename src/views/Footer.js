import React from "react";
import { Linkedin , Instagram} from "lucide-react";

function Footer() {
  return (
    <div className="bg-gray-100 pb-10 py-2 px-8">
      <hr className="m-2" />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center md:text-left">
        <div>
          <h3 className="text-xl font-bold">Phone</h3>
          <a
            href="tel:8856962503"
            className="text-gray-700 hover:text-blue-500 text-lg">
            8856962503
          </a>
        </div>

        <div>
          <h3 className="text-xl font-bold">Email</h3>
          <a
            href="mailto:sauravshete72@gmail.com"
            className="text-gray-700 hover:text-blue-500 text-lg">
            sauravshete72@gmail.com
          </a>
        </div>

        <div>
          <h3 className="text-xl font-bold">Follow Me</h3>
          <div className="flex justify-center md:justify-start space-x-4 mt-2">
            <a
              href="https://www.linkedin.com/in/sauravshete/"
              className="text-gray-800 hover:text-blue-600"
            >
              <i className="fab fa-linkedin"></i> <Linkedin/>
            </a>
            <a
              href="https://www.instagram.com/sauravshete/"
              className="text-gray-800 hover:text-pink-600"
            >
              <i className="fab fa-instagram"></i> <Instagram/>
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold">Address</h3>
          <p className="text-gray-700 text-lg font-bold">Katraj, Pune</p>
        </div>
      </div>

      <div className="mt-6 text-center text-sm text-gray-600">
        © 2025 By Saurav Shete. Powered and secured by React.
      </div>
    </div>
  );
}

export default Footer;
