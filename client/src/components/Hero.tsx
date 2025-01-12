import React from "react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <section className="hero bg-gray-200 dark:bg-gray-800 p-20 text-center">
      <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
        Welcome to Campus Events
      </h1>
      <p className="mt-4 text-gray-700 dark:text-gray-300">
        Your one-stop destination for all campus happenings!
      </p>
      <Link
        to="/eventDetail"
        className="mt-6 inline-block bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
      >
        Exlpore Events
      </Link>
    </section>
  );
};

export default Hero;
