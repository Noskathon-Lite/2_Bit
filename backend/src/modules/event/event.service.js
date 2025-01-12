const { default: mongoose } = require("mongoose");
const eventmodel = require("./event.model");

class eventservice {
  eventcreate = async (data) => {
    try {
      const event = new eventmodel(data);
      return await event.save();
    } catch (exception) {
      throw exception;
    }
  };
  listdata = async ({ skip = 0, limit = 10, filter = {} }) => {
    try {
      const count = await eventmodel.countDocuments(filter);
      const data = await eventmodel
        .find(filter)
        .populate("createdBy", ["_id", "name", "email", "role"])
        .sort({ _id: "desc" })
        .limit(limit)
        .skip(skip);
      return { count, data };
    } catch (exception) {
      throw exception;
    }
  };
  getDetailbyfilter = async (filter) => {
    try {
      const eventDetail = await eventmodel
        .findOne(filter)
        .populate("createdBy", ["_id", "name", "email", "role"]);
      return eventDetail;
    } catch (exception) {
      throw exception;
    }
  };

  eventUpdate = async (id, data) => {
    try {
      //(id,{$set:data},{new:true})args
      const update = await eventmodel.findByIdAndUpdate(
        id,
        { $set: data },
        { new: true }
      );
      return update;
    } catch (exception) {
      throw exception;
    }
  };

  eventDelete = async (id) => {
    try {
      const eventdelete = await eventmodel.deleteOne({ _id: id }); //or findbyidanddelete(id)
      if (!eventdelete) {
        throw { status: 404, message: "Event Not found" };
      }

      return eventdelete;
    } catch (exception) {
      throw exception;
    }
  };

  // In eventService.js
  registerEvent = async (eventId, userId) => {
    try {
      // Find the event by its ID
      const event = await eventmodel.findById(eventId);

      if (!event) {
        throw { status: 404, message: "Event Not found" };
      }

      // Ensure the registeredStudents field is an array
      if (!Array.isArray(event.registeredStudents)) {
        event.registeredStudents = [];
      }

      // Check if the user is already registered for the event
      if (event.registeredStudents.includes(userId)) {
        throw {
          status: 422,
          message: "User is already registered for this event",
        };
      }

      // Create a new ObjectID from the user ID
      const userObjectId = new mongoose.Types.ObjectId(userId);

      const update = await eventmodel.findByIdAndUpdate(
        eventId,
        { $push: { registeredStudents: userObjectId } }, // Push the user ID into the array
        { new: true }
      );
      // return update;

      // Save the updated event document
      await update.save();

      return update;
    } catch (exception) {
      throw exception;
    }
  };
  getRegisteredEvents = async (userId) => {
    try {
      // Find all events where the userId is in the registeredStudents array
      const events = await eventmodel
        .find({
          registeredStudents: new mongoose.Types.ObjectId(userId),
        }) //"location",
        .populate("createdBy", [
          "tittles",
          "details",
          "link",
          "startDate",
          "endDate",
        ]) // Populating createdBy
        .sort({ startDate: "desc" });

      return events;
    } catch (exception) {
      throw exception;
    }
  };
}
module.exports = new eventservice();
