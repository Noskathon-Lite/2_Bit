import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Edit, Trash2, Users, Search, Filter } from "lucide-react";

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
// User Dashboard Component
const UserDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [events, setEvents] = useState(sampleEvents);

  const handleTagClick = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.organizer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.some((tag) => event.tags.includes(tag));
    return matchesSearch && matchesTags;
  });

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Campus Events</h1>
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
              <Button className="w-full mt-4">Register</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;
