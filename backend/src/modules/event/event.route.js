const router=require("express").Router()
const logincheck=require("../auth/auth.middleware")
const haspermission=require("../../middlewares/rbac.middleware")
const {setpath, uploadFile}=require("../../middlewares/uploader.middleware")
const datavalidator=require("../../middlewares/validator.middleware")
const { filefiltertype } = require("../../config/constant.config")
const { eventcreateDTO, eventupdateDTO } = require("./event.request")
const eventController = require("./event.controller")
const eventservice = require("./event.service")

//public route for event view
router.get("/",eventController.homepageevent)

//protected route for event creation and listing events of organization
router.route("/")//logincheck,haspermission("organization"),
    .post(setpath("event"),uploadFile().single(filefiltertype.IMAGE),datavalidator(eventcreateDTO),eventController.create)
    .get(logincheck,haspermission("organization"),eventController.details)


//route update and show specific event based on event-id
router.route("/:id")
        .get(logincheck,eventController.show)//logincheck,setpath("event"),uploadFile().single(filefiltertype.IMAGE),datavalidator(eventupdateDTO),
        .patch(eventController.update)

//route for delete event
router.route("/:id/:public_id")
        .delete(logincheck, haspermission('organization'),eventController.delete)

//register user into the event
router.route("/register/:eventId/:userId")
        .post(logincheck,haspermission("student"),eventController.eventregister)// change to student
        //.delete(logincheck, haspermission("student"), eventController.unregisterevent)

//get registered events of user 
router.route("/registeredevents/:userId")
    .get( eventController.registeredEvents)//logincheck, haspermission("student"),
    
module.exports=router;