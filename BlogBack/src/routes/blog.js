const express = require("express");
const BlogPost = require("../models/BlogPost");
const router = express.Router();

// 블로그 목록 조회
router.get("/", async (req, res) => {
  try {
    const posts = await BlogPost.find().sort({ dateat: -1 });
    res.status(200).json(posts);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to fetch blog posts", error: err.message });
  }
});

// 특정 카테고리의 블로그 조회
router.get("/category/:category", async (req, res) => {
  try {
    const category = req.params.category;
    const posts = await BlogPost.find({ category }).sort({ dateat: -1 });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({
      message: "Failed to fetch blog posts by category",
      error: err.message,
    });
  }
});

// 새 블로그 등록
router.post("/add", async (req, res) => {
  try {
    const newPost = new BlogPost(req.body);
    await newPost.save();
    res
      .status(201)
      .json({ message: "Blog post created successfully", post: newPost });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to create blog post", error: err.message });
  }
});

// 블로그 삭제
router.delete("/delete/:id", async (req, res) => {
  try {
    const deleted = await BlogPost.findOneAndDelete({ postID: req.params.id });
    if (!deleted) return res.status(404).json({ message: "Post not found" });
    res.status(200).json({ message: "Blog post deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to delete blog post", error: err.message });
  }
});

// 블로그 수정
router.put("/update/:id", async (req, res) => {
  try {
    const updated = await BlogPost.findOneAndUpdate(
      { postID: req.params.id },
      req.body,
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: "Post not found" });
    res
      .status(200)
      .json({ message: "Blog post updated successfully", post: updated });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to update blog post", error: err.message });
  }
});

module.exports = router;
