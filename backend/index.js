import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import cors from "cors";
import { storage } from "./cloudinaryconfig.js";
import Image from "./models/imageModel.js";

const upload = multer({ storage})
const app = express();

app.use(cors({
  origin: process.env.frontend_url,
  methods: ["GET", "POST"],
  credentials:true,
  allowedHeaders: "Content-Type,Authorization",
}));

// Use the body-parsers *after* multer to avoid interference with form-data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Database
async function main() {
  try {
    await mongoose.connect(process.env.mongo_Atlas);
    console.log("Connected to DB");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

main();

// Test Route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// File Upload Route
app.post("/upload", upload.single("image"), (req, res) => {
  const {path} =req.file
  if (!req.file) {
    return res.status(400).json({ message: "No Image Provided" });
  }
  const data = new Image({
    url:path
  });
  data.save();  
  res.json({ message: "File uploaded successfully" });
});

app.get("/show",async (req,res)=>{
  const data = await Image.find({});
  res.status(200).json(data)
})

// Error handling middleware
app.use((req, res, next) => {
  res.status(404).send({ message: "Route not found" });
});

// Start server
const port = 8080;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});