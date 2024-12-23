const express = require("express");
const router = express.Router();

const blogRoutes = require("./blog");
const projectRoutes = require("./project");

router.use("/blog", blogRoutes);
router.use("/project", projectRoutes);

module.exports = router;
