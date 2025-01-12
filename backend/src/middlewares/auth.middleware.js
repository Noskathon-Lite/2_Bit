const logincheck = (req, res, next) => {
  console.log("User has logged in successfully");
  next();
};

module.exports = logincheck;
