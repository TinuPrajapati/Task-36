import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from "multer-storage-cloudinary";


cloudinary.config({
  cloud_name: process.env.CLOUD_name,
  api_key: "845174197924367",
  api_secret: "zoYqtmreJp8f-WeGBDh03KXl2oc",
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "Task-36-imageUpload",
    allowedFromat: ["png", "jpg", "jpeg"],
  },
});


export {
    storage,
    cloudinary
}