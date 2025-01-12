const router = require("express").Router();
const userrouter = require("../modules/user/user.route");
const authrouter = require("../modules/auth/auth.route");
const eventrouter = require("../modules/event/event.route");

router.use("/user", userrouter);
router.use("/auth", authrouter);
router.use("/event", eventrouter);

module.exports = router;
