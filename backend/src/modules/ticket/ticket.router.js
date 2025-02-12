const express = require('express');
const ticketController = require('./ticket.controller'); // Adjust the path as necessary
const router = express.Router();

// Create a new ticket
router.post('/tickets', ticketController.createTicket);

// Get all tickets
router.get('/tickets', ticketController.getAllTickets);

// Get a ticket by ID
router.get('/tickets/:id', ticketController.getTicketById);

// Update a ticket by ID
router.put('/tickets/:id', ticketController.updateTicketById);

// Delete a ticket by ID
router.delete('/tickets/:id', ticketController.deleteTicketById);

module.exports = router;