import { Laptop, Smartphone } from "lucide-react";
import React from "react";

function Header() {
  return (
    <div className="flex items-center justify-between px-6 py-6 bg-white shadow">
      <div className="text-4xl font-bold text-black">Portfolio</div>
      <div className="flex justify-around ml-5">
        <Laptop 
        className=" text-gray-500 cursor-pointer mr-4"
        size={50} /> 
        <Smartphone
        className=" text-gray-500 cursor-pointer ml-4"
        size={50} />
      </div>

      <div className="flex items-center space-x-4">
        <span className="text-xl font-medium text-gray-600">
          Click edit and create your own amazing website
        </span>
        <a
          href="#"
          className="text-xl font-medium text-blue-600 underline hover:no-underline"
        >
          Read More
        </a>
      </div>

      <button className="px-4 py-2 text-xl font-medium text-white bg-blue-600 rounded-full hover:bg-blue-500">
        Edit this site
      </button>
    </div>
  );
}

export default Header;
