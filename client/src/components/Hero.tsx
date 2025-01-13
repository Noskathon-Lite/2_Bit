import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const handleExploreEvents = async (): Promise<void> => {
    try {
      const eventData = {}; // Add any necessary parameters for the API call
      const events = await (eventData); // Fetch event data
      console.log("Events fetched successfully:", events);

      // Navigate to the events page and pass the fetched data as state
      navigate("/event", { state: { events } });
    } catch (error) {
      console.error("Failed to fetch events:", error);
      alert("An error occurred while fetching events. Please try again.");
    }
  };
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
        <button
          // onClick={handleExploreEvents}
          className="mt-6 inline-block bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
        >
          Explore Events
        </button>
        
      </div>
    </section>
  );
};

export default Hero;
