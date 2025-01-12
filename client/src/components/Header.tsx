import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-green-500 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left-aligned Logo and Title */}
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center">
            <img
              src="/logo.png" // Replace with the path to your image
              alt="Campus Events Logo"
              className="h-10 w-15 mr-2"
            />
            <span className="text-2xl font-bold hover:underline">
              Campus Events
            </span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-4">

          <Link to="/aboutus" className="text-white hover:underline">
            About Us
          </Link>
          <Link to="/contact" className="text-white hover:underline">
            Contact
          </Link>
          <Link to="/login" className="text-white hover:underline">
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
