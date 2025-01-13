import React from "react";

const EventGallery: React.FC = () => {
  const events = [
    {
      id: 1,
      title: "Tech Fest 2023",
      image: "../../public/techfest.jpg",
      description: "A technology-focused event showcasing innovations.",
    },
    {
      id: 2,
      title: "Cultural Night",
      image: "../../public/culturalnight.jpg",
      description: "An evening filled with music, dance, and food.",
    },
    {
      id: 3,
      title: "Sports Day",
      image: "../../public/sportsday.jpg",
      description: "An exciting day of athletics and team competitions.",
    },
    {
      id: 4,
      title: "Art Exhibition",
      image: "../../public/artexhibition.jpg",
      description: "A gallery of artwork created by talented students.",
    },
    {
      id: 5,
      title: "Workshop on AI",
      image: "../../public/aiworkshop.jpg",
      description: "A workshop introducing Artificial Intelligence concepts.",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <button
        onClick={() => window.history.back()}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Go Back
      </button>

      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-green-700">
          Event Gallery
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold text-green-700">
                  {event.title}
                </h2>
                <p className="text-sm text-gray-600 mt-2">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventGallery;
