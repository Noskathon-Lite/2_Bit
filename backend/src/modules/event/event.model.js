const mongoose = require("mongoose");
const { statustype } = require("../../config/constant.config");
const { optional } = require("joi");
const eventschema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    details: {
      type: String,
      default: null,
    },
    location: {
      type: String,
      default: null,
    },
    image: {
      type: String,
    },
    link: {
      type: String,
      default: null,
    },
    status: {
      type: String,
      required: true,
      enum: [statustype.ACTIVE, statustype.INACTIVE],
      default: statustype.INACTIVE,
    },
    registeredStudents: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    tags: {
      type: [String],
      default: ["all"],
    },
    startDate: Date,
    endDate: Date,
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      default: null,
    },
    public_id: {
      //for cloudinary
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
    autoIndex: true,
    autoCreate: true,
  }
);

module.exports = mongoose.model("Event", eventschema);
