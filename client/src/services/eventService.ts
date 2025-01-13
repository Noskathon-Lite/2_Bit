import axiosInstance from "../axios/axiosInstance";

// // Define a TypeScript interface for the event data structure
// interface EventData {
//   // Define the properties of the event data (adjust types as needed)
//   name: string;
//   date: string;
//   location: string;
//   [key: string]: any; // Allow additional dynamic properties if needed
// }

// // Define a TypeScript interface for the response data structure
// interface EventResponse {
//   id: string;
//   name: string;
//   date: string;
//   location: string;
//   // Add other response properties as needed
// }

// export const createEvent = (eventData: EventData): Promise<EventResponse> => {
//   return axiosInstance
//     .post("/events", eventData) // Replace with your event creation endpoint
//     .then((response) => {
//       const { data }: { data: EventResponse } = response;
//       // Optionally, handle the event creation response, such as storing the event info in localStorage or updating state
//       console.log(data);
//       return data; // Return the event data or any other relevant response
//     })
//     .catch((error: Error) => {
//       console.error("Error creating event:", error);
//       throw error; // Optionally, throw or handle the error
//     });
// };

export const createEvent = async (eventData) => {
  return axiosInstance
    .post("/event", { ...eventData, image: "hello" }) // Replace with your event creation endpoint
    .then((response) => {
      const { data } = response;
      // Optionally, handle the event creation response, such as storing the event info in localStorage or updating state
      console.log(data);
      return data; // Return the event data or any other relevant response
    })
    .catch((error) => {
      console.error("Error creating event:", error);
      throw error; // Optionally, throw or handle the error
    });
  
  
};


export const getAllEvents = async () => {
  try {
    const response = await axiosInstance.get("/event"); // Your event API endpoint
    const { data } = response; // Destructure the response to get the data

    console.log("Fetched events:", data); // Log the data to check the structure

    // Check if the response structure is as expected
    if (data && data.result && Array.isArray(data.result.data)) {
      return data.result.data; // Return the events array
    } else {
      console.error("Unexpected API response:", data);
      return []; // Return an empty array if the structure is unexpected
    }
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error; // Handle the error, potentially show a message to the user
  }
};

