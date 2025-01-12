const express = require("express");
const cors = require("cors");
require("./db.config");
const router = require("./router.config");

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.use((req, res, next) => {
  next({ statusCode: 401, message: "route not defined " });
});

// to do error handling

module.exports = app;
