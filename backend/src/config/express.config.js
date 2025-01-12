const express = require("express");
const cors = require("cors");
require("./db.config");
const router = require("./router.config");
const multer = require("multer");
const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.use((req, res, next) => {
  next({ statusCode: 401, message: "route not defined " });
});

app.use((error, req, res, next) => {
  console.log(error);

  let statusCode = error.status || 500;
  let message = error.message || "server error..";
  let details = error.details || null;

  //MONGODB UNIQUENESS ERROR
  if (error.code === 11000) {
    const uniqueFailedKeys = Object.keys(error.keyPattern);
    details = {};

    uniqueFailedKeys.map((field) => {
      details[field] = field + " should be unique";
    });
    (statusCode = 400), (message = "validation failed");
  }

  //multer error
  if (error instanceof multer.MulterError) {
    if (error.code === "LIMIT-FILE-SIZE") {
      (statusCode = 400),
        (details = {
          [error.field]: "file size too large",
        });
    }
  }

  res.status(statusCode).json({
    message: message,
    details: details,
    meta: null,
  });
});

module.exports = app;
