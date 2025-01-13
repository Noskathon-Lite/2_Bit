// import React from "react";
// import { Link, useParams } from "react-router-dom";
// import Header from "./Header";

// const EventDetail: React.FC = () => {
//   const { eventId } = useParams<{ eventId: string }>();

//   // Define the types for the event object
//   interface EventData {
//     id: number;
//     title: string;
//     description: string;
//     location: string;
//     date: string;
//     time: string;
//     organizer: {
//       name: string;
//       accountLink: string;
//     };
//     image: string;
//     tags: string[];
//   }

//   // Constant event data (fixed, will not change)
//   const event: EventData = {
//     id: 1,
//     title: "Sample Event",
//     description:
//       "This is a detailed description of the event. It covers all the important aspects and what attendees can expect.",
//     location: "123 Event St, City, Country",
//     date: "January 1, 2025", // Example date (YYYY-MM-DD)
//     time: "10:00 AM - 4:00 PM", // Example start time (HH:MM AM/PM)
//     organizer: {
//       name: "Organizer Name",
//       accountLink: "/organizers/1", // Link to organizer's page
//     },
//     image: "https://via.placeholder.com/600x300", // Placeholder image
//     tags: ["Workshop", "Networking", "Technology"],
//   };

//   const handleAddToCalendar = (event: EventData) => {
//     // Logic to add event to calendar
//     const eventDetails = {
//       title: event.title,
//       start: new Date(
//         event.date + " " + event.time.split(" - ")[0]
//       ).toISOString(),
//       end: new Date(
//         event.date + " " + event.time.split(" - ")[1]
//       ).toISOString(),
//       location: event.location,
//       description: event.description,
//     };

//     const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
//       eventDetails.title
//     )}&dates=${eventDetails.start}/${
//       eventDetails.end
//     }&location=${encodeURIComponent(
//       eventDetails.location
//     )}&details=${encodeURIComponent(eventDetails.description)}`;

//     window.open(calendarUrl, "_blank");
//   };

//   return (
//     <div>
//       <Header showLoginButton={false} />
//       <div className="container mx-auto p-4">
//         <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6">
//           <img
//             src={event.image}
//             alt={event.title}
//             className="w-full h-64 object-cover rounded-lg"
//           />
//           <h1 className="text-3xl font-bold mt-4">{event.title}</h1>
//           <p className="mt-2 text-gray-700">{event.description}</p>

//           <div className="mt-4 flex items-center">
//             <div className="mr-4 grid grid-cols-2 gap-4">
//               <div>
//                 <h2 className="text-xl font-semibold">Date</h2>
//                 <p className="text-gray-600 flex items-center">{event.date}</p>
//               </div>
//               <button
//                 onClick={() => handleAddToCalendar(event)}
//                 className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
//               >
//                 Add to Calendar
//               </button>
//             </div>
//           </div>

//           <div className="mt-4">
//             <h2 className="text-xl font-semibold">Time</h2>
//             <p className="text-gray-600">{event.time}</p>
//           </div>

//           <div className="mt-4">
//             <h2 className="text-xl font-semibold">Location</h2>
//             <p className="text-gray-600">{event.location}</p>
//             {/* You can embed a map here using a service like Google Maps */}
//           </div>

//           <div className="mt-4">
//             <h2 className="text-xl font-semibold">Organizer</h2>
//             <p className="text-gray-600">
//               <a
//                 href={event.organizer.accountLink}
//                 className="text-blue-500 hover:underline"
//               >
//                 {event.organizer.name}
//               </a>
//             </p>
//           </div>

//           <div className="mt-4">
//             <h2 className="text-xl font-semibold">Tags</h2>
//             <div className="flex space-x-2">
//               {event.tags.map((tag, index) => (
//                 <span
//                   key={index}
//                   className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-sm"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           </div>

//           <div className="mt-8 flex space-x-4">
//             <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-200">
//               <Link to="/user-event-registration">Register</Link>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventDetail;
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getEventById } from "@/services/eventService";

interface Event {
  _id: string;
  title: string;
  details: string;
  location: string;
  image: string;
  startDate: string;
  endDate: string;
  tags: string[];
  status: string;
  [key: string]: any; // Additional fields for flexibility
}

const EventDetailsById: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the event ID from the URL
  const [event, setEvent] = useState<Event | null>(null); // Event data
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [error, setError] = useState<string>(""); // Error state
  const navigate = useNavigate(); // For navigation

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        setLoading(true);
        if (id) {
          const response = await getEventById(id); // Fetch event by ID
          console.log("API Response:", response); // Debug log

          const eventData = response // Directly access the event object from the response

          if (eventData && eventData._id === id) {
            setEvent(eventData); // Set the event data
          } else {
            setError("Event not found.");
          }
        }
      } catch (err) {
        console.error("API Error:", err); // Log error
        setError("Failed to load event details.");
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  if (loading) {
    return <div className="p-8 text-center">Loading event details...</div>;
  }

  if (error) {
    return (
      <div className="p-8 text-center">
        <p>{error}</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
        >
          Back to Events
        </button>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="p-8 text-center">
        <p>Event not found.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
        >
          Back to Events
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-4">{event.title}</h2>
      <p className="text-gray-600 mb-2">
        {new Date(event.startDate).toLocaleDateString()} -{" "}
        {new Date(event.endDate).toLocaleDateString()}
      </p>
      <p className="mb-4">{event.details}</p>
      <img src={event.image} alt={event.title} className="w-full h-auto mb-4" />
      <p className="mb-4">Location: {event.location}</p>
      <button
        onClick={() => navigate("/")}
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
      >
        Back to Events
      </button>
    </div>
  );
};

export default EventDetailsById;
