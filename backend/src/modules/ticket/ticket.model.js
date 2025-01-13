const mongoose = require('mongoose');


const ticketSchema = new mongoose.Schema({
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
    default: null
  },
  startTime: {
    type: Date,
    default: null
  },
  endTime: {
    type: Date,
    default: null
  }
}, {
  timestamps: true // Automatically adds createdAt and updatedAt fields
});

// Export the Ticket model
module.exports = mongoose.model('Ticket', ticketSchema);