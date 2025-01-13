const { uploadImage, deleteImage } = require("../../config/cloudinary.config");
const { statustype } = require("../../config/constant.config");
const { filedelete } = require("../../utilities/helper");
const Usermodel = require("../user/user.module");
const eventmodel = require("./event.model");
const eventService = require("./event.service");

class eventController {

  //create for creating an event
  create = async (req, res, next) => {
    try {
      const data = req.body;
      // console.log(data);

      if (req.file) {
        const imageData = await uploadImage(
          "./public/uploads/event/" + req.file.filename
        ); //gives image url and public id
        data.image = imageData.url;
        data.public_id = imageData.public_id;

        //delete img from local
        filedelete("./public/uploads/event/" + req.file.filename);
      }
      data.createdBy = req.authUser._id;

      const event = await eventService.eventcreate(data); // event creation
      res.json({
        result: event,
        message: "event Created successfully",
        meta: null,
      });
      //console.log(data.image);
    } catch (exception) {
      console.log("exception event create!!!!!", exception);

      next(exception);
    }
  };


//list for listing all events of organization
  details = async (req, res, next) => {
    try {
      const page = +req.query.page || 1;
      const limit = +req.query.limit || 10;
      const skip = (page - 1) * limit;

      let filter = {};
      if (req.query.search) {
        filter = {
          title: new RegExp(req.query.search, "i"),
        };
      }
      const { count, data } = await eventService.listdata({
        skip: skip,
        limit: limit,
        filter: filter,
      });

      res.json({
        result: data,
        message: "Total event list",
        meta: {
          currentpage: page,
          total: count,
          limit: limit,
        },
      });
    } catch (exception) {
      console.log(exception);
      next(exception);
    }
  };

//show for showing event details of a specific event
  show = async (req, res, next) => {
    try {
      const id = req.params.id;
      if (!id) {
        next({ status: 400, message: "Id is required" });
      }
      const eventDetails = await eventService.getDetailbyfilter({
        _id: id, //filter of req data
      });

      if (!eventDetails) {
        throw { status: 404, message: "Event doesnot exist." };
      }
      res.json({
        result: eventDetails,
        message: "Event Details.",
        meta: null,
      });
    } catch (exception) {
      next(exception);
    }
  };

//update for updating event
  update = async (req, res, next) => {
    try {
      console.log("id", req.authUser._id);
      const id = req.params.id;
      if (!id) {
        next({ status: 400, message: "Id is required" });
      }
      const eventDetails = await eventService.getDetailbyfilter({
        _id: id, //filter of req data
      });

      if (!eventDetails) {
        throw { status: 404, message: "Event doesnot exist." };
      }

      const data = req.body;
      if (req.image) {
        data.image = await uploadImage(
          "./public/uploads/event/" + req.file.filename
        );
        filedelete("./public/uploads/event/" + req.file.filename);
      }
      const eventUpdate = await eventService.eventUpdate(id, data);

      res.json({
        result: eventUpdate,
        message: "Event updated successfully",
        meta: null,
      });
    } catch (exception) {
      next(exception);
    }
  };

//delete for deleting event
  delete = async (req, res, next) => {
    try {
      const { id, public_id } = req.params;
      if (!id || !public_id) {
        next({ status: 400, message: "Id is required" });
      }
      const eventDetails = await eventService.getDetailbyfilter({
        _id: id, //filter of req data
        public_id: public_id,
      });

      if (!eventDetails) {
        throw { status: 404, message: "Event doesnot exist." };
      }
      const eventdelete = await eventService.eventDelete(id); //delete from database

      const eventdeletecloud = await deleteImage(public_id); //delete from cloudinary

      res.json({
        result: eventdelete,
        message: "Event deleted successfully",
        meta: null,
      });
    } catch (exception) {
      next(exception);
    }
  };

//homepageevent for listing events in homepage
  homepageevent = async (req, res, next) => {
    try {
      const list = await eventService.listdata({
        limit: 5,
        filter: {
          status: statustype.ACTIVE,
          startDate: { $lte: new Date() },
          endDate: { $gte: new Date() },
        },
      });

      res.json({
        result: list,
        message: "homepage Event",
        meta: null,
      });
    } catch (exception) {
      next(exception);
    }
  };

//reventregister for registering user for event 
  eventregister = async (req, res, next) => {
    try {
      const { eventId, userId } = req.params; // Get eventId and userId from route params

      if (!eventId || !userId) {
        return next({
          status: 400,
          message: "Event ID and User ID are required",
        });
      }

      // Fetch event details using eventId
      const eventDetails = await eventService.getDetailbyfilter({
        _id: eventId,
      });
      if (!eventDetails) {
        return next({ status: 404, message: "Event does not exist" });
      }

      // Fetch user details using userId
      const user = await Usermodel.findById(userId);
      if (!user) {
        return next({ status: 404, message: "User does not exist" });
      }

      // Now register the user for the event
      const eventRegister = await eventService.registerEvent(eventId, userId);

      res.json({
        result: eventRegister,
        message: "User registered for the event successfully",
        meta: null,
      });
    } catch (exception) {
      next(exception);
    }
  };

//registeredEvents for listing events registered by user
  registeredEvents = async (req, res, next) => {
    try {
      const { userId } = req.params;
      const registeredEvents = await eventService.getRegisteredEvents(userId);

      res.json({
        result: registeredEvents, 
        message: "Registered events",
        meta: null,
      });
    } catch (exception) {
      console.log(exception);
    }
  };
}

module.exports = new eventController();
