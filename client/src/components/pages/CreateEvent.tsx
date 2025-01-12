import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const CreateEventForm = ({ eventData, onSubmit }) => {
  const [formData, setFormData] = useState({
    eventName: "",
    eventDescription: "",
    eventDate: "",
    eventTime: "",
    eventLocation: "",
    eventType: "workshop",
    eventOrganizer: "",
    eventContactEmail: "",
    eventWebsite: "",
    eventPoster: null,
    eventTags: [],
    tagInput: "",
  });

  const predefinedTags = [
    "Technology",
    "Education",
    "Networking",
    "Leadership",
    "Innovation",
    "Career",
    "Other",
  ];

  // If eventData exists, set formData with the event data (for editing)
  useEffect(() => {
    if (eventData) {
      setFormData({
        eventName: eventData.eventName || "",
        eventDescription: eventData.eventDescription || "",
        eventDate: eventData.eventDate || "",
        eventTime: eventData.eventTime || "",
        eventLocation: eventData.eventLocation || "",
        eventType: eventData.eventType || "workshop",
        eventOrganizer: eventData.eventOrganizer || "",
        eventContactEmail: eventData.eventContactEmail || "",
        eventWebsite: eventData.eventWebsite || "",
        eventPoster: eventData.eventPoster || null,
        eventTags: eventData.eventTags || [],
        tagInput: "", // Reset tag input
      });
    }
  }, [eventData]);

  const handleTagInputChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({ ...prevData, tagInput: value }));
  };

  const handleTagSelect = (tag) => {
    if (!formData.eventTags.includes(tag)) {
      setFormData((prevData) => ({
        ...prevData,
        eventTags: [...prevData.eventTags, tag],
        tagInput: "", // Clear input field after selection
      }));
    }
  };

  const handleTagRemove = (tag) => {
    setFormData((prevData) => ({
      ...prevData,
      eventTags: prevData.eventTags.filter((t) => t !== tag),
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Call the onSubmit function (either create or update)
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white p-8 rounded-lg shadow-xl">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        {eventData ? "Edit Your Campus Event" : "Register Your Campus Event"}
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Event Name */}
        <div className="space-y-2">
          <Label htmlFor="event_name">Event Name</Label>
          <Input
            id="event_name"
            name="eventName"
            value={formData.eventName}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-md shadow-sm"
            required
          />
        </div>

        {/* Event Description */}
        <div className="space-y-2">
          <Label htmlFor="event_description">Event Description</Label>
          <Textarea
            id="event_description"
            name="eventDescription"
            value={formData.eventDescription}
            onChange={handleChange}
            rows={4}
            className="w-full border border-gray-300 p-3 rounded-md shadow-sm"
            required
          />
        </div>

        {/* Event Date */}
        <div className="space-y-2">
          <Label htmlFor="event_date">Event Date</Label>
          <Input
            type="date"
            id="event_date"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-md shadow-sm"
            required
          />
        </div>

        {/* Event Time */}
        <div className="space-y-2">
          <Label htmlFor="event_time">Event Time</Label>
          <Input
            type="time"
            id="event_time"
            name="eventTime"
            value={formData.eventTime}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-md shadow-sm"
            required
          />
        </div>

        {/* Event Location */}
        <div className="space-y-2">
          <Label htmlFor="event_location">Event Location</Label>
          <Input
            type="text"
            id="event_location"
            name="eventLocation"
            value={formData.eventLocation}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-md shadow-sm"
            required
          />
        </div>

        {/* Event Type */}
        <div className="space-y-2">
          <Label htmlFor="event_type">Event Type</Label>
          <select
            id="event_type"
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-md shadow-sm"
            required
          >
            <option value="workshop">Workshop</option>
            <option value="seminar">Seminar</option>
            <option value="conference">Conference</option>
            <option value="hackathon">Hackathon</option>
            <option value="webinar">Webinar</option>
            <option value="competition">Competition</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Event Tags */}
        <div className="space-y-2">
          <Label htmlFor="event_tags">Event Tags</Label>
          <div className="flex flex-wrap space-x-2 mb-4">
            {formData.eventTags.map((tag) => (
              <span
                key={tag}
                className="bg-blue-600 text-white p-2 rounded-md cursor-pointer"
                onClick={() => handleTagRemove(tag)}
              >
                {tag} &times;
              </span>
            ))}
          </div>

          <div className="relative">
            <Input
              type="text"
              id="event_tags"
              name="tagInput"
              value={formData.tagInput}
              onChange={handleTagInputChange}
              placeholder="Type or select tags"
              className="w-full border border-gray-300 p-3 rounded-md shadow-sm"
            />
            <div className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-md z-10">
              {formData.tagInput &&
                predefinedTags
                  .filter((tag) =>
                    tag.toLowerCase().includes(formData.tagInput.toLowerCase())
                  )
                  .map((tag) => (
                    <div
                      key={tag}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                      onClick={() => handleTagSelect(tag)}
                    >
                      {tag}
                    </div>
                  ))}
            </div>
          </div>
        </div>

        {/* Organizer Email */}
        <div className="space-y-2">
          <Label htmlFor="event_contact_email">Organizer Email</Label>
          <Input
            type="email"
            id="event_contact_email"
            name="eventContactEmail"
            value={formData.eventContactEmail}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-md shadow-sm"
            required
          />
        </div>

        {/* Event Website */}
        <div className="space-y-2">
          <Label htmlFor="event_website">Event Website (Optional)</Label>
          <Input
            type="url"
            id="event_website"
            name="eventWebsite"
            value={formData.eventWebsite}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-md shadow-sm"
          />
        </div>

        {/* Event Poster */}
        <div className="space-y-2">
          <Label htmlFor="event_poster">Event Poster (Optional)</Label>
          <Input
            type="file"
            id="event_poster"
            name="eventPoster"
            onChange={handleFileChange}
            className="w-full border border-gray-300 p-3 rounded-md shadow-sm"
          />
        </div>

        {/* Submit Button */}
        <Button type="submit" className="w-full text-white p-3 rounded-md shadow-md">
          {eventData ? "Update Event" : "Create Event"}
        </Button>
      </form>
    </div>
  );
};

export default CreateEventForm;
