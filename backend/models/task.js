const mongoose = require("mongoose");

const task = mongoose.Schema({
  title: {
    type: String,
  },
  desc: {
    type: String,
  },
  Date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("task", task);
