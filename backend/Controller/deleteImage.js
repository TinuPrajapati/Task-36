const Image = require("../models/imageModel");
const {cloudinary} = require("../cloudinaryconfig");

const deleteImage = async (req, res) => {
  try {
    const { id } = req.params;
    const image = await Image.findByIdAndDelete(id);
    if (!image) {
      return res.status(404).json("Image not found");
    }
    await cloudinary.uploader.destroy(image.filename);
    res.status(200).json("Image deleted successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports=deleteImage