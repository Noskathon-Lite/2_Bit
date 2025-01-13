import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Search, Filter } from "lucide-react";
import Logout from "../Logout";

// Sample data for tags and events
const allTags = [
  "technology",
  "workshop",
  "learning",
  "career",
  "networking",
  "professional",
  "sports",
  "arts",
  "music",
];

const sampleEvents = [
  {
    id: 1,
    title: "Tech Workshop",
    date: "2025-01-20",
    location: "Engineering Building",
    tags: ["technology", "workshop", "learning"],
    participants: [
      { id: 1, name: "John Doe", email: "john@university.edu" },
      { id: 2, name: "Jane Smith", email: "jane@university.edu" },
    ],
    organizer: "Tech Club",
  },
  {
    id: 2,
    title: "Career Fair",
    date: "2025-01-25",
    location: "Student Center",
    tags: ["career", "networking", "professional"],
    participants: [{ id: 3, name: "Bob Wilson", email: "bob@university.edu" }],
    organizer: "Career Services",
  },
];

// EventList Component
const EventList = ({ events }) => (
  <div>
    {events.length === 0 ? (
      <p>No registered events found.</p>
    ) : (
      events.map((event) => (
        <div key={event.id} className="p-2 border-b">
          <h3 className="font-semibold">{event.title}</h3>
          <p>{event.date}</p>
        </div>
      ))
    )}
  </div>
);
// UserDashboard Component
const UserDashboard = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [events, setEvents] = useState(sampleEvents);
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const [viewRegisteredEvents, setViewRegisteredEvents] = useState(false);

  const handleTagClick = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleRegister = (event) => {
    setRegisteredEvents((prev) => [...prev, event]);
  };

  const handleViewRegisteredEvents = () => {
    setViewRegisteredEvents((prev) => !prev);
  };

  const filteredEvents = (
    viewRegisteredEvents ? registeredEvents : events
  ).filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.organizer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.some((tag) => event.tags.includes(tag));
    return matchesSearch && matchesTags;
  });

  return (
    <div className="min-h-screen p-6 flex flex-col space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/" className="text-green-500 hover:text-green-700">
            Campus Events
          </Link>
        </h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8 w-64"
            />
          </div>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
          <Button
            onClick={() => navigate("/user-profile")}
            className="bg-green-600 text-white hover:bg-green-700 px-6 py-2 rounded"
          >
            View Profile
          </Button>
          <Logout />
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {allTags.map((tag) => (
          <Badge
            key={tag}
            variant={selectedTags.includes(tag) ? "default" : "outline"}
            className="cursor-pointer"
            onClick={() => handleTagClick(tag)}
          >
            {tag}
          </Badge>
        ))}
      </div>

      <div className="cursor-pointer" onClick={handleViewRegisteredEvents}>
        <Card className="border-2 p-4 mt-6 bg-green-100 hover:bg-green-200">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              {viewRegisteredEvents
                ? "View All Events"
                : "View Registered Events"}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-600">
            {viewRegisteredEvents
              ? "Click here to go back to view all events."
              : "Click here to view your registered events."}
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredEvents.map((event) => (
          <Card key={event.id}>
            <CardHeader>
              <CardTitle className="text-xl">{event.title}</CardTitle>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="h-4 w-4 mr-2" />
                {event.date}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{event.location}</p>
              <p className="text-gray-600 mb-2">
                Organized by: {event.organizer}
              </p>
              <div className="flex flex-wrap gap-1">
                {event.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <Button
                onClick={() => handleRegister(event)}
                className="w-full mt-4"
              >
                Register
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;
