const mongoose = require("mongoose");

const BlogPostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  dateat: { type: Date, default: Date.now },
  category: { type: String, required: true },
  blogID: { type: String, required: true },
});

module.exports = mongoose.model("BlogPost", BlogPostSchema);
