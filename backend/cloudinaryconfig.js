const { CloudinaryStorage } = require('@fluidjs/multer-cloudinary');
const { v2: cloudinary } = require('cloudinary');

cloudinary.config({
  cloud_name: process.env.CLOUD_name,
  api_key: process.env.CLOUD_API,
  api_secret: process.env.CLOUD_API_SECERT,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "Image-Uploader",
    allowedFromat: ["png", "jpg", "jpeg"],
  },
});

module.exports ={storage,cloudinary}