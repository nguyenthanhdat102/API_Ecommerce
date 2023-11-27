const express = require("express");
const router = express.Router();
// =====================================================
const brandController = require("./brandController");
// =====================================================
router.get("/", categoryController.getCategories);
router.get("/:cateId", categoryController.getCategory);
router.post("/", categoryController.createCategory);
router.put("/:cateId", categoryController.updateCategory);
router.delete("/:cateId", categoryController.deleteCategory);
// =====================================================
module.exports = router;
