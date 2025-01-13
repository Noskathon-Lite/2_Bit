const router = require("express").Router();
const userrouter = require("../modules/user/user.route");
const authrouter = require("../modules/auth/auth.route");
const eventrouter = require("../modules/event/event.route");
const ticketrouter = require("../modules/ticket/ticket.router");

router.use("/user", userrouter);
router.use("/auth", authrouter);
router.use("/event", eventrouter);
router.use("/ticketing", ticketrouter);

module.exports = router;
