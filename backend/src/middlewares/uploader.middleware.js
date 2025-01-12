const multer = require("multer");
const fs = require("fs");
const { randomstring } = require("../utilities/helper");
const { filefiltertype } = require("../config/constant.config");

const localstorage = multer.diskStorage({
  destination: (req, file, cb) => {
    //storage location
    const path = "./public/uploads/" + req.uploadpath;
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path, { recursive: true }); //creates folder
    }
    cb(null, path);
  },
  filename: (req, file, cb) => {
    //assigning unique file name

    const ext = file.originalname.split(".").pop(); //extension
    const Filename = randomstring(40) + "." + ext;
    cb(null, Filename);
  },
});

const uploadFile = (filetype = filefiltertype.IMAGE) => {
  let allowed = ["jpeg", "jpg", "svg", "bmp", "webp", "gif", "png"];

  if (filetype === filefiltertype.DOCUMENT) {
    allowed = ["doc", "docx", "pdf", "csv", "xlsx", "txt"];
  }

  return multer({
    storage: localstorage,
    limits: {
      fileSize: 3145728, //3mb in bytes default is 2 mb
    },
    fileFilter: (req, file, cb) => {
      const ext = file.originalname.split(".").pop();
      if (allowed.includes(ext.toLowerCase())) {
        cb(null, true);
      } else {
        cb({ code: 400, message: "File not supported.." }, false);
      }
    },
  });
};

const setpath = (path) => {
  return (req, res, next) => {
    req.uploadpath = path;
    next();
  };
};

module.exports = {
  uploadFile,
  setpath,
};
