const router = require("express").Router();

const userRouter = require("../module/user/user.router");
// const authRouter = require("../module/auth/auth.router");

router.use("/user", userRouter);
// router.use("/auth", authRouter);    

module.exports = router;