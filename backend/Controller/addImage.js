const Image = require("../models/imageModel");

const addImage = async (req, res) => {
  try {
    const { path, filename } = req.file;
    
    const data = new Image({
      url: path,
      filename,
    });
    data.save();
    res.status(201).json("File uploaded successfully");
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = addImage;