import React from "react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <section
      className="hero p-20 text-center relative"
      style={{
        backgroundImage: "url('../public/campus.jpg')", // Replace with your image path
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>{" "}
      {/* Dark overlay */}
      <div className="relative z-10">
        <h1 className="text-5xl font-bold text-white">
          Welcome to Campus Events
        </h1>
        <p className="mt-4 text-white">
          Your one-stop destination for all campus happenings!
        </p>
        <Link
          to="/login"
          className="mt-6 inline-block bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
        >
          Explore Events
        </Link>
      </div>
    </section>
  );
};

export default Hero;
