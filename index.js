require("dotenv/config");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

// MAIN HOMEPAGE ROUTE
app.get("/", (req, res) => {
  res.send("<h1>Abdakadabra API Homepage</h1>");
});

// Students - NIM Finder ITB
const studentRoute = require("./server/routes/students");
app.use("/api/students", studentRoute);

mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  dbName: "nim_finder"
});
let db = mongoose.connection;
db.on("connected", console.error.bind(console, "MongoDB connected"));
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
