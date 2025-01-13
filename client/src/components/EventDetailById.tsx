import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getEventById } from "@/services/eventService"; // Import the service

interface Event {
  _id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  image: string;
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
          const eventData = await getEventById(id); // Fetch the event by its ID
          setEvent(eventData); // Set the event data in the state
        }
      } catch (err) {
        setError("Failed to load event details.");
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]); // Re-run when the `id` changes

  if (loading) {
    return <div className="p-8 text-center">Loading event details...</div>;
  }

  if (error) {
    return (
      <div className="p-8 text-center">
        <p>{error}</p>
        <button
          onClick={() => navigate("/events")}
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
          onClick={() => navigate("/events")}
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
      <p className="text-gray-600 mb-2">{new Date(event.startDate).toLocaleDateString()} - {new Date(event.endDate).toLocaleDateString()}</p>
      <p className="mb-4">{event.description}</p>
      <img src={event.image} alt={event.title} className="w-full h-auto mb-4" />
      <p className="mb-4">Location: {event.location}</p>
      <button
        onClick={() => navigate("/events")}
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
      >
        Back to Events
      </button>
    </div>
  );
};

export default EventDetailsById;
