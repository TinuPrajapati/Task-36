require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./Routes/router");
const app = express();

app.use(cors());
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

app.use("/image",router)

// Start server
const port = 8080;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
