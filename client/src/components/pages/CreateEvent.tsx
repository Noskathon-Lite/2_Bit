// import { useState, useEffect } from "react";
// import { Label } from "@/components/ui/label";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { createEvent } from "@/services/eventService";

// const CreateEventForm = ({ eventData, onSubmit }) => {
//   const [formData, setFormData] = useState({
//     title: "",
//     link: "",
//     details: "",
//     image: "",
//     location: "",
//     status: "active",
//     tags: [],
//     startDate: "",
//     endDate: "",
//   });

//   const predefinedTags = [
//     "Technology",
//     "Education",
//     "Networking",
//     "Leadership",
//     "Innovation",
//     "Career",
//     "Other",
//   ];

//   // If eventData exists, set formData with the event data (for editing)
//   useEffect(() => {
//     if (eventData) {
//       setFormData({
//         title: eventData.title || "",
//         link: eventData.link || "",
//         details: eventData.details || "",
//         image: eventData.image || null,
//         location: eventData.location || "",
//         status: eventData.status || "active",
//         tags: eventData.tags || [],
//         startDate: eventData.startDate || "",
//         endDate: eventData.endDate || "",
//       });
//     }
//   }, [eventData]);

//   const handleTagInputChange = (e) => {
//     const { value } = e.target;
//     setFormData((prevData) => ({ ...prevData, tagInput: value }));
//   };

//   const handleTagSelect = (tag) => {
//     if (!formData.tags.includes(tag)) {
//       setFormData((prevData) => ({
//         ...prevData,
//         tags: [...prevData.tags, tag],
//         tagInput: "", // Clear input field after selection
//       }));
//     }
//   };

//   const handleTagRemove = (tag) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       tags: prevData.tags.filter((t) => t !== tag),
//     }));
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(formData);

//     try {
//       // Call the onSubmit function (either create or update)

//       await createEvent(formData);
//     } catch (error) {
//       console.error(error);
//     }

//     // Call the onSubmit function (either create or update)
//   };

//   return (
//     <div className="max-w-4xl mx-auto mt-10 bg-white p-8 rounded-lg shadow-xl">
//       <h1 className="text-2xl font-semibold text-gray-800 mb-6">
//         {eventData ? "Edit Your Campus Event" : "Register Your Campus Event"}
//       </h1>
//       <form onSubmit={handleSubmit} className="space-y-6">
//         {/* Event Name */}
//         <div className="space-y-2">
//           <Label htmlFor="title">Event Title</Label>
//           <Input
//             id="title"
//             name="title"
//             value={formData.title}
//             onChange={handleChange}
//             className="w-full border border-gray-300 p-3 rounded-md shadow-sm"
//             required={!!formData.title}
//           />
//         </div>

//         {/* Event Details */}
//         <div className="space-y-2">
//           <Label htmlFor="details">Event Details</Label>
//           <Textarea
//             id="details"
//             name="details"
//             value={formData.details}
//             onChange={handleChange}
//             rows={4}
//             className="w-full border border-gray-300 p-3 rounded-md shadow-sm"
//             required={!!formData.details}
//           />
//         </div>

//         {/* Event Start Date */}
//         <div className="space-y-2">
//           <Label htmlFor="startDate">Event Start Date</Label>
//           <Input
//             type="date"
//             id="startDate"
//             name="startDate"
//             value={formData.startDate}
//             onChange={handleChange}
//             className="w-full border border-gray-300 p-3 rounded-md shadow-sm"
//             required={!!formData.startDate}
//           />
//         </div>

//         {/* Event End Date */}
//         <div className="space-y-2">
//           <Label htmlFor="endDate">Event End Date</Label>
//           <Input
//             type="date"
//             id="endDate"
//             name="endDate"
//             value={formData.endDate}
//             onChange={handleChange}
//             className="w-full border border-gray-300 p-3 rounded-md shadow-sm"
//             required={!!formData.endDate}
//           />
//         </div>

//         {/* Event Location */}
//         <div className="space-y-2">
//           <Label htmlFor="location">Event Location</Label>
//           <Input
//             type="text"
//             id="location"
//             name="location"
//             value={formData.location}
//             onChange={handleChange}
//             className="w-full border border-gray-300 p-3 rounded-md shadow-sm"
//             required={!!formData.location}
//           />
//         </div>

//         {/* Event Tags */}
//         <div className="space-y-2">
//           <Label htmlFor="tags">Event Tags</Label>
//           <div className="flex flex-wrap space-x-2 mb-4">
//             {formData.tags.map((tag) => (
//               <span
//                 key={tag}
//                 className="bg-blue-600 text-white p-2 rounded-md cursor-pointer"
//                 onClick={() => handleTagRemove(tag)}
//               >
//                 {tag} &times;
//               </span>
//             ))}
//           </div>

//           <div className="relative">
//             <Input
//               type="text"
//               id="tags"
//               name="tagInput"
//               value={formData.tagInput}
//               onChange={handleTagInputChange}
//               placeholder="Type or select tags"
//               className="w-full border border-gray-300 p-3 rounded-md shadow-sm"
//             />
//             <div className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-md z-10">
//               {formData.tagInput &&
//                 predefinedTags
//                   .filter((tag) =>
//                     tag.toLowerCase().includes(formData.tagInput.toLowerCase())
//                   )
//                   .map((tag) => (
//                     <div
//                       key={tag}
//                       className="px-4 py-2 cursor-pointer hover:bg-gray-200"
//                       onClick={() => handleTagSelect(tag)}
//                     >
//                       {tag}
//                     </div>
//                   ))}
//             </div>
//           </div>
//         </div>

//         {/* Event Link */}
//         <div className="space-y-2">
//           <Label htmlFor="link">Event Link</Label>
//           <Input
//             type="url"
//             id="link"
//             name="link"
//             value={formData.link}
//             onChange={handleChange}
//             className="w-full border border-gray-300 p-3 rounded-md shadow-sm"
//           />
//         </div>

//         {/* Event Image */}
//         <div className="space-y-2">
//           <Label htmlFor="image">Event Image</Label>
//           <Input
//             type="file"
//             id="image"
//             name="image"
//             onChange={handleFileChange}
//             className="w-full border border-gray-300 p-3 rounded-md shadow-sm"
//           />
//         </div>

//         {/* Submit Button */}
//         <Button
//           type="submit"
//           className="w-full text-white p-3 rounded-md shadow-md"
//         >
//           {eventData ? "Update Event" : "Create Event"}
//         </Button>
//       </form>
//     </div>
//   );
// };

// export default CreateEventForm;

import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createEvent } from "@/services/eventService";
import { getUser } from "@/services/authService";

const CreateEventForm = ({ eventData, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: "",
    link: "",
    details: "",
    image: "",
    location: "",
    status: "active",
    tags: [],
    startDate: "",
    endDate: "",
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
        title: eventData.title || "",
        link: eventData.link || "",
        details: eventData.details || "",
        image: eventData.image || null,
        location: eventData.location || "",
        status: eventData.status || "active",
        tags: eventData.tags || [],
        startDate: eventData.startDate || "",
        endDate: eventData.endDate || "",
      });
    }
  }, [eventData]);

  const handleTagSelect = (tag) => {
    if (!formData.tags.includes(tag)) {
      setFormData((prevData) => ({
        ...prevData,
        tags: [...prevData.tags, tag],
      }));
    }
  };

  const handleTagRemove = (tag) => {
    setFormData((prevData) => ({
      ...prevData,
      tags: prevData.tags.filter((t) => t !== tag),
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      // Call the onSubmit function (either create or update)
      await createEvent(formData);
    } catch (error) {
      console.error(error);
    }

    // Call the onSubmit function (either create or update)
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white p-8 rounded-lg shadow-xl">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        {eventData ? "Edit Your Campus Event" : "Register Your Campus Event"}
      </h1>
      <button onClick={getUser()}>Submit</button>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Event Name */}
        <div className="space-y-2">
          <Label htmlFor="title">Event Title</Label>
          <Input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-md shadow-sm"
            required={!!formData.title}
          />
        </div>

        {/* Event Details */}
        <div className="space-y-2">
          <Label htmlFor="details">Event Details</Label>
          <Textarea
            id="details"
            name="details"
            value={formData.details}
            onChange={handleChange}
            rows={4}
            className="w-full border border-gray-300 p-3 rounded-md shadow-sm"
            required={!!formData.details}
          />
        </div>

        {/* Event Start Date */}
        <div className="space-y-2">
          <Label htmlFor="startDate">Event Start Date</Label>
          <Input
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-md shadow-sm"
            required={!!formData.startDate}
          />
        </div>

        {/* Event End Date */}
        <div className="space-y-2">
          <Label htmlFor="endDate">Event End Date</Label>
          <Input
            type="date"
            id="endDate"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-md shadow-sm"
            required={!!formData.endDate}
          />
        </div>

        {/* Event Location */}
        <div className="space-y-2">
          <Label htmlFor="location">Event Location</Label>
          <Input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-md shadow-sm"
            required={!!formData.location}
          />
        </div>

        {/* Event Tags */}
        <div className="space-y-2">
          <Label htmlFor="tags">Event Tags</Label>
          <div className="flex flex-wrap space-x-2 mb-4">
            {formData.tags.map((tag) => (
              <span
                key={tag}
                className="bg-blue-600 text-white p-2 rounded-md cursor-pointer"
                onClick={() => handleTagRemove(tag)}
              >
                {tag} &times;
              </span>
            ))}
          </div>

          <div className="flex flex-wrap space-x-2">
            {predefinedTags.map((tag) => (
              <span
                key={tag}
                className={`${
                  formData.tags.includes(tag)
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700"
                } p-2 rounded-md cursor-pointer`}
                onClick={() => handleTagSelect(tag)}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Event Link */}
        <div className="space-y-2">
          <Label htmlFor="link">Event Link</Label>
          <Input
            type="url"
            id="link"
            name="link"
            value={formData.link}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-md shadow-sm"
          />
        </div>

        {/* Event Image */}
        <div className="space-y-2">
          <Label htmlFor="image">Event Image</Label>
          <Input
            type="file"
            id="image"
            name="image"
            onChange={handleFileChange}
            className="w-full border border-gray-300 p-3 rounded-md shadow-sm"
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full text-white p-3 rounded-md shadow-md"
        >
          {eventData ? "Update Event" : "Create Event"}
        </Button>
      </form>
    </div>
  );
};

export default CreateEventForm;
