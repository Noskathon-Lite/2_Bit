import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Edit, Trash2, Users } from "lucide-react";
import { LayoutDashboard, Settings, PieChart, X } from "lucide-react";
import { Link } from "react-router-dom";

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
const OrgDashboard = () => {
  const [events, setEvents] = useState(sampleEvents);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showParticipants, setShowParticipants] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleDelete = (eventId) => {
    setEvents((prev) => prev.filter((event) => event.id !== eventId));
  };

  const handleEdit = (eventId) => {
    console.log("Edit event:", eventId);
  };

  const handleViewParticipants = (event) => {
    setSelectedEvent(event);
    setShowParticipants(true);
  };

  const ParticipantsList = ({ event, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Participants - {event.title}</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 px-4 font-semibold">Name</th>
                <th className="text-left py-2 px-4 font-semibold">Email</th>
              </tr>
            </thead>
            <tbody>
              {event.participants.map((participant) => (
                <tr key={participant.id} className="border-b">
                  <td className="py-2 px-4">{participant.name}</td>
                  <td className="py-2 px-4">{participant.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const Sidebar = () => (
    <div
      className={`fixed left-0 top-0 h-full bg-white border-r transition-all duration-300 ${
        sidebarOpen ? "w-64" : "w-16"
      }`}
    >
      <div className="p-4">
        <h2 className={`font-bold text-xl mb-8 ${!sidebarOpen && "hidden"}`}>
          Organization
        </h2>
        <nav className="space-y-2">
          <Button
            variant="ghost"
            className="w-full justify-start hover:bg-gray-100"
          >
            <LayoutDashboard className="h-5 w-5 mr-2" />
            {sidebarOpen && "Dashboard"}
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start hover:bg-gray-100"
          >
            <Calendar className="h-5 w-5 mr-2" />
            {sidebarOpen && "Events"}
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start hover:bg-gray-100"
          >
            <PieChart className="h-5 w-5 mr-2" />
            {sidebarOpen && "Analytics"}
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start hover:bg-gray-100"
          >
            <Settings className="h-5 w-5 mr-2" />
            {sidebarOpen && "Settings"}
          </Button>
        </nav>
      </div>
    </div>
  );
  return (
    <div className="flex">
      <Sidebar />
      <div
        className={`flex-1 transition-all duration-300 ${
          sidebarOpen ? "ml-64" : "ml-16"
        }`}
      >
        <div className="p-6 space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Your Events</h1>
            <Link to="/create-event">
              <Button>Create New Event</Button>
            </Link>
          </div>

          <div className="space-y-4">
            {events.map((event) => (
              <Card key={event.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{event.title}</CardTitle>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <Calendar className="h-4 w-4 mr-2" />
                        {event.date}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleViewParticipants(event)}
                      >
                        <Users className="h-4 w-4 mr-2" />
                        Participants ({event.participants.length})
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleEdit(event.id)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="destructive"
                        size="icon"
                        onClick={() => handleDelete(event.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1">
                    {event.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      {showParticipants && selectedEvent && (
        <ParticipantsList
          event={selectedEvent}
          onClose={() => {
            setShowParticipants(false);
            setSelectedEvent(null);
          }}
        />
      )}
    </div>
  );
};

export default OrgDashboard;
