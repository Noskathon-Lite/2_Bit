const mongoose = require("mongoose");
const { userrole, statustype } = require("../../config/constant.config");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      min: 2,
      max: 25,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
      min: 8,
    },
    phone: {
      type: String,
      min: 8,
      max: 15,
    },
    address: {
      type: String,
    },
    role: {
      type: String,
      enum: [...Object.values(userrole)],
      default: userrole.STUDENT,
    },
    status: {
      type: String,
      enum: [...Object.values(statustype)],
      default: statustype.INACTIVE,
    },
    activationToken: String,
    activateFor: Date,
    image: String,
    forgetToken: String,
    forgetFor: Date,
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      default: null,
    },
  },
  {
    timestamps: true,
    autoIndex: true,
    autoCreate: true,
  }
);

const Usermodel = mongoose.model("User", userSchema);

module.exports = Usermodel;
