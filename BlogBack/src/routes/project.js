const express = require("express");
const ProjectPost = require("../models/ProjectPost");
const router = express.Router();

// 프로젝트 목록 조회
router.get("/", async (req, res) => {
  try {
    const posts = await ProjectPost.find().sort({ dateat: -1 });
    res.status(200).json(posts);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to fetch project posts", error: err.message });
  }
});

// 프로젝트 상세 조회
router.get("/:id", async (req, res) => {
  try {
    const post = await ProjectPost.findOne({ projectID: req.params.id });
    if (!post) return res.status(404).json({ message: "Project not found" });
    res.status(200).json(post);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to fetch project post", error: err.message });
  }
});

// 새 프로젝트 등록
router.post("/add", async (req, res) => {
  try {
    const newProject = new ProjectPost(req.body);
    await newProject.save();
    res.status(201).json({
      message: "Project post created successfully",
      project: newProject,
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to create project post", error: err.message });
  }
});

// 프로젝트 수정
router.put("/update/:id", async (req, res) => {
  try {
    const updated = await ProjectPost.findOneAndUpdate(
      { projectID: req.params.id },
      req.body,
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: "Project not found" });
    res
      .status(200)
      .json({ message: "Project post updated successfully", project: updated });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to update project post", error: err.message });
  }
});

// 프로젝트 삭제
router.delete("/delete/:id", async (req, res) => {
  try {
    const deleted = await ProjectPost.findOneAndDelete({
      projectID: req.params.id,
    });
    if (!deleted) return res.status(404).json({ message: "Project not found" });
    res.status(200).json({ message: "Project post deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to delete project post", error: err.message });
  }
});

module.exports = router;
