const mongoose = require("mongoose");

const ProjectPostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  dateat: { type: Date, default: Date.now },
  description: { type: String, required: true },
  skill: { type: [String], required: true },
  projectID: { type: String, required: false },
});

module.exports = mongoose.model("ProjectPost", ProjectPostSchema);
