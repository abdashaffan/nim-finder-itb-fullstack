const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  query: {
    type: String,
    required: [true, "Query must not be empty"]
  },
  size: {
    type: Number,
    required: true,
    min: [1, "Invalid size number, must be greater than 0"]
  },
  offset: {
    type: Number,
    required: true,
    min: [0, "Invalid offset number, must be non-negative value"]
  }
});

module.exports = mongoose.model("Student", StudentSchema, "student_data");
