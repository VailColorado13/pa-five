const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  titles: {
    type: Array,
    required: true,
  }, 
})

module.exports = mongoose.model("Job", JobSchema);
