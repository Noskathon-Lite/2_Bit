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

export const createEvent = (eventData) => {
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
