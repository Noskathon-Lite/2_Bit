// import React from "react";
// import { useNavigate } from "react-router-dom";

// const events = [
//   {
//     id: 1,
//     title: "Event 1",
//     date: "January 1, 2025",
//     description:
//       "Description for Event 1. This event will cover various topics and provide insights.",
//   },
//   {
//     id: 2,
//     title: "Event 2",
//     date: "February 1, 2025",
//     description:
//       "Description for Event 2. Join us for an exciting day of activities and learning.",
//   },
//   {
//     id: 3,
//     title: "Event 3",
//     date: "March 1, 2025",
//     description:
//       "Description for Event 3. Don’t miss out on this opportunity to network and grow.",
//   },
// ];

// const EventList: React.FC = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="container mx-auto p-8">
//       <h2 className="text-3xl font-bold mb-6 text-center">Upcoming Events</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {events.map((event) => (
//           <div
//             key={event.id}
//             className="border rounded-lg p-4 shadow-md bg-white transition-transform transform hover:scale-105"
//           >
//             <h3 className="text-xl font-semibold">{event.title}</h3>
//             <p className="text-gray-600">{event.date}</p>
//             <p className="mt-2">{event.description}</p>
//             <button
//               onClick={() => navigate(`/event/${event.id}`)} // Use useNavigate for redirection
//               className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-200"
//             >
//               Learn More
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default EventList;
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllEvents } from "@/services/eventService"; // Assuming the service path

interface Event {
  _id: string; // Use _id since that's what's returned in the API response
  title: string;
  startDate: string;
  description: string;
  image: string;
}

const EventList: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]); // Make sure events is an array
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const data = await getAllEvents();
        console.log("Fetched events:", data); // Log the data to check its structure

        if (Array.isArray(data)) {
          setEvents(data); // Set events if it's an array
        } else {
          setError("Received data is not an array");
        }
      } catch (err) {
        setError("Failed to load events. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return <div className="p-8 text-center">Loading events...</div>;
  }

  if (error) {
    return (
      <div className="p-8 text-center">
        <p>{error}</p>
      </div>
    );
  }

  if (events.length === 0) {
    return (
      <div className="p-8 text-center">
        <p>No events available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">All Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map((event) => (
          <div
            key={event._id} // Use _id instead of id
            className="border rounded-lg p-4 shadow-md bg-white transition-transform transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold">{event.title}</h3>
            <p className="text-gray-600">{new Date(event.startDate).toLocaleDateString()}</p> {/* Format the date */}
            <p className="mt-2">{event.description}</p>
            <img src={event.image} alt={event.title} className="w-full h-auto mt-4" /> {/* Display event image */}
            <button
              onClick={() => navigate(`/event/${event._id}`)} // Navigate to event details
              className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-200"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventList;
