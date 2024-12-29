const { CloudinaryStorage } = require('@fluidjs/multer-cloudinary');
const { v2: cloudinary } = require('cloudinary');

cloudinary.config({
  cloud_name: "dthfgonlq",
  api_key: "845174197924367",
  api_secret: "zoYqtmreJp8f-WeGBDh03KXl2oc",
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "Image-Uploader",
    allowedFromat: ["png", "jpg", "jpeg"],
  },
});

module.exports ={storage,cloudinary}