const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  ID: {
    type: String,
    required: true,
  },

  titles: {
    type: Array,
    required: true,
  }, 
})

module.exports = mongoose.model("Job", JobSchema);
