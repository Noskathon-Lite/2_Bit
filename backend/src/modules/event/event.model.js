const mongoose = require("mongoose");
const { statustype } = require("../../config/constant.config");
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
      required: true,
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
        default: [],
      },
    ],

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

const eventmodel = mongoose.model("Event", eventschema);
module.exports = eventmodel;
