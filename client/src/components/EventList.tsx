import React from "react";
import { useNavigate } from "react-router-dom";

const events = [
  {
    id: 1,
    title: "Event 1",
    date: "January 1, 2025",
    description:
      "Description for Event 1. This event will cover various topics and provide insights.",
  },
  {
    id: 2,
    title: "Event 2",
    date: "February 1, 2025",
    description:
      "Description for Event 2. Join us for an exciting day of activities and learning.",
  },
  {
    id: 3,
    title: "Event 3",
    date: "March 1, 2025",
    description:
      "Description for Event 3. Don’t miss out on this opportunity to network and grow.",
  },
];

const EventList: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Upcoming Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="border rounded-lg p-4 shadow-md bg-white transition-transform transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold">{event.title}</h3>
            <p className="text-gray-600">{event.date}</p>
            <p className="mt-2">{event.description}</p>
            <button
              onClick={() => navigate(`/events/${event.id}`)} // Use useNavigate for redirection
              className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-200"
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventList;
