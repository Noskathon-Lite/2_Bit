import React from "react";
import { useParams } from "react-router-dom";

const EventDetail: React.FC = () => {
  const { eventId } = useParams<{ eventId: string }>();

  // Sample event data (replace with actual data fetching logic)
  const event = {
    id: eventId,
    title: "Sample Event",
    description:
      "This is a detailed description of the event. It covers all the important aspects and what attendees can expect.",
    location: "123 Event St, City, Country",
    date: "January 1, 2025",
    time: "10:00 AM - 4:00 PM",
    organizer: {
      name: "Organizer Name",
      accountLink: "/organizers/1", // Link to the organizer's account
    },
    image: "https://via.placeholder.com/600x300", // Placeholder image
    tags: ["Workshop", "Networking", "Technology"],
  };

  const handleRSVP = () => {
    // Logic for RSVP (e.g., API call)
    alert("You have RSVP'd for the event!");
  };

  const handleRegister = () => {
    // Logic for registration (e.g., API call)
    alert("You have registered for the event!");
  };

  const handleAddToCalendar = () => {
    // Logic to add event to calendar
    const eventDetails = {
      title: event.title,
      start: new Date(
        event.date + " " + event.time.split(" - ")[0]
      ).toISOString(),
      end: new Date(
        event.date + " " + event.time.split(" - ")[1]
      ).toISOString(),
      location: event.location,
      description: event.description,
    };

    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      eventDetails.title
    )}&dates=${eventDetails.start}/${
      eventDetails.end
    }&location=${encodeURIComponent(
      eventDetails.location
    )}&details=${encodeURIComponent(eventDetails.description)}`;

    window.open(calendarUrl, "_blank");
  };

  return (
    <div className="container mx-auto p-4">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-64 object-cover rounded-lg"
      />
      <h1 className="text-3xl font-bold mt-4">{event.title}</h1>
      <p className="mt-2 text-gray-700">{event.description}</p>

      <div className="mt-4 flex items-center">
        <div className="mr-4">
          <h2 className="text-xl font-semibold">Date</h2>
          <p className="text-gray-600 flex items-center">
            {event.date}
          </p>
        </div>
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-semibold">Time</h2>
        <p className="text-gray-600">{event.time}</p>
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-semibold">Location</h2>
        <p className="text-gray-600">{event.location}</p>
        {/* You can embed a map here using a service like Google Maps */}
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-semibold">Organizer</h2>
        <p className="text-gray-600">
          <a
            href={event.organizer.accountLink}
            className="text-blue-500 hover:underline"
          >
            {event.organizer.name}
          </a>
        </p>
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-semibold">Tags</h2>
        <div className="flex space-x-2">
          {event.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8 flex space-x-4">
        <button
          onClick={handleRegister}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default EventDetail;
