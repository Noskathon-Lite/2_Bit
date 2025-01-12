const Ticket = require("./ticket.model"); // Adjust the path as necessary

// Create a new ticket
exports.createTicket = async (req, res) => {
  try {
    const { eventId, userId, location, startTime, endTime } = req.body;

    const ticket = new Ticket({
      eventId,
      userId,
      location,
      startTime,
      endTime,
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
    const tickets = await Ticket.find().populate("eventId userId"); // Populate event and user details
    res.status(200).json(tickets);
  } catch (error) {
    console.error("Error retrieving tickets:", error);
    res.status(500).json({ message: error.message });
  }
};

// Get a ticket by ID
exports.getTicketById = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id).populate(
      "eventId userId"
    );
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
