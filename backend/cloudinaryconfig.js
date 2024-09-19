import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from "multer-storage-cloudinary";


cloudinary.config({
  cloud_name: process.env.CLOUD_name,
  api_key: process.env.CLOUD_API,
  api_secret: process.env.CLOUD_API_SECERT,
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