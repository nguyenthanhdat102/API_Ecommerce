const express = require("express");
const router = express.Router();
// =====================================================
const brandController = require("./brandController");
// =====================================================
router.get("/", brandController.getBrands);
router.get("/:cateId", brandController.getBrand);
router.post("/", brandController.createBrand);
router.put("/:cateId", brandController.updateBrand);
router.delete("/:cateId", brandController.deleteBrand);
// =====================================================
module.exports = router;
