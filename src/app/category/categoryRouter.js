const express = require("express");
const router = express.Router();
// =====================================================
const categoryController = require("./categoryController");
// =====================================================
router.get("/", categoryController.getCategories);
router.get("/:cateId", categoryController.getCategory);
router.post("/", categoryController.createCategory);
router.put("/:cateId", categoryController.updateCategory);
router.patch("/:cateId", categoryController.deleteCategory);
// =====================================================
module.exports = router;
