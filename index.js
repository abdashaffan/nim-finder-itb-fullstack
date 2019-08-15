require("dotenv/config");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require('path')

app.use(bodyParser.json());


// Students - NIM Finder ITB
const studentRoute = require("./server/routes/students");
app.use("/api/students", studentRoute);

if (process.env.NODE_NEV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

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
