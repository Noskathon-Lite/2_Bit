import React from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  showLoginButton?: boolean; // Optional prop to show/hide the login button
}

const Header: React.FC<HeaderProps> = ({ showLoginButton = true }) => {
  return (
    <header className="bg-green-500 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/logo.png" // Replace with the path to your image
            alt="Campus Events Logo"
            className="h-10 w-15 mr-2"
          />
          <h1 className="text-2xl font-bold">
            <Link to="/" className="text-white hover:underline">
              Campus Events
            </Link>
          </h1>
        </div>
        <div className="flex space-x-4">
          <Link to="/home" className="text-white hover:underline">
            Home
          </Link>
          <Link to="/aboutus" className="text-white hover:underline">
            About Us
          </Link>
          <Link to="/contact" className="text-white hover:underline">
            Contact
          </Link>
          {showLoginButton && (
            <Link to="/login" className="text-white hover:underline">
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
