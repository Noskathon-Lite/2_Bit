import React from "react";

const UpcomingEvents: React.FC = () => {
  const events = [
    {
      title: "Tech Talk 2025",
      date: "January 20, 2025",
      description:
        "Join us for an exciting tech talk about the latest in AI and Machine Learning.",
      imageUrl: "/tech-talk.jpg", // Add your image in the public folder
    },
    {
      title: "Coding Bootcamp",
      date: "February 10, 2025",
      description:
        "A hands-on coding bootcamp to sharpen your programming skills.",
      imageUrl: "/coding-bootcamp.jpg", // Add your image in the public folder
    },
    {
      title: "Career Fair",
      date: "March 5, 2025",
      description: "Meet with top companies and explore career opportunities.",
      imageUrl: "/career-fair.jpg", // Add your image in the public folder
    },
  ];

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-6">
        {/* Go Back Button */}
        <button
          onClick={() => window.history.back()}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-8"
        >
          Go Back
        </button>

        <h2 className="text-3xl font-bold text-center mb-8">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={event.imageUrl}
                alt={event.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{event.date}</p>
              <p className="text-gray-800">{event.description}</p>
              <a
                href="/eventdetails"
                className="block mt-4 text-green-500 hover:underline"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
