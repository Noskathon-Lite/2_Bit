const mongoose = require('mongoose');


const ticketSchema = new mongoose.Schema({
  ticketId: {
    type: String,
    required: true,
    unique: true // Ensures that each ticketId is unique
  },
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event', // Refrences an Event model
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User ', // Refrences a User model
    required: true
  },
  location: {
    type: String,
    required: true //location is required
  },
  startTime: {
    type: Date,
    required: true // Start time of the event
  },
  endTime: {
    type: Date,
    required: true // End time of the event
  }
}, {
  timestamps: true // Automatically adds createdAt and updatedAt fields
});

// Export the Ticket model
module.exports = mongoose.model('Ticket', ticketSchema);