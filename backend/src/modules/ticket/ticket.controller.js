const Ticket = require("./ticket.model"); // Adjust the path as necessary
const Event = require("../event/event.model"); // Adjust the path as necessary
const User = require("../user/user.module"); // Adjust the path as necessary
// Create a new ticket
exports.createTicket = async (req, res) => {
  try {
    const { eventId, userId } = req.body;

    // Ensure required fields are present
    if (!eventId || !userId) {
      return res.status(400).json({ message: "Event ID and User ID are required" });
    }

    // Check if the event exists
    const eventExists = await Event.findById(eventId);
    if (!eventExists) {
      return res.status(404).json({ message: "Event not found" });
    }

    // Check if the user exists
    const userExists = await User.findById(userId);
    if (!userExists) {
      return res.status(404).json({ message: "User not found" });
    }

    const ticket = new Ticket({
      eventId,
      userId,
    });

    await ticket.save();
    res.status(201).json(ticket);
  } catch (error) {
    console.error("Error creating ticket:", error);
    res.status(400).json({ message: error.message });
  }
};


// Get all tickets
exports.getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find(); // Populate event and user details
    res.status(200).json(tickets);
  } catch (error) {
    console.error("Error retrieving tickets:", error);
    res.status(422).json({ message: error.message });
  }
};

//Get all tickets of a event
exports.getTicketsByEventId = async (req, res) => {
  try {
    const { id } = req.params; // Accessing id directly from req.params

    // Check if the event exists using findById to ensure you're matching the id
    const eventExists = await Event.findById(id);

    if (!eventExists) {
      return res.status(404).json({ message: "Event not found" });
    }

    // Find all tickets for the event
    const tickets = await Ticket.find({ eventId: id });
    res.status(200).json(tickets);
  } catch (error) {
    console.error("Error retrieving event tickets:", error);
    res.status(500).json({ message: error.message });
  }
};

// Get a ticket by ID
exports.getTicketById = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id)
    // .populate("eventId userId");
    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found" });
    }
    res.status(200).json(ticket);
  } catch (error) {
    console.error("Error retrieving ticket:", error);
    res.status(500).json({ message: error.message });
  }
};

// Update a ticket by ID
exports.updateTicketById = async (req, res) => {
  try {
    const { location, startTime, endTime } = req.body;

    const ticket = await Ticket.findByIdAndUpdate(
      req.params.id,
      { location, startTime, endTime },
      { new: true, runValidators: true }
    );

    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found" });
    }
    res.status(200).json(ticket);
  } catch (error) {
    console.error("Error updating ticket:", error);
    res.status(400).json({ message: error.message });
  }
};

// Delete a ticket by ID
exports.deleteTicketById = async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndDelete(req.params.id);
    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found" });
    }
    res.status(204).send(); // No content
  } catch (error) {
    console.error("Error deleting ticket:", error);
    res.status(500).json({ message: error.message });
  }
};
