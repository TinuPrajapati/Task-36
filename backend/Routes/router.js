const express = require('express');
const showImage = require('../Controller/showImage');
const addImage = require('../Controller/addImage');
const router = express.Router();
const multer = require("multer")
const {storage} = require("../cloudinaryconfig");
const deleteImage = require('../Controller/deleteImage');
const upload = multer({ storage });

router.get("/",showImage);
router.post("/upload",upload.single("image"),addImage);
router.delete("/delete/:id",deleteImage);

module.exports = router;