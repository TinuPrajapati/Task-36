const Image = require("../models/imageModel");

const showImage = async (req, res) => {
  const data = await Image.find({});
  res.status(200).json(data);
};

module.exports = showImage