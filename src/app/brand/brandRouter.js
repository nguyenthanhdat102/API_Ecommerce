const express = require("express");
const router = express.Router();
// =====================================================
const brandController = require("./brandController");
// =====================================================
router.get("/", brandController.getBrands);
router.get("/:brandId", brandController.getBrand);
router.post("/", brandController.createBrand);
router.put("/:brandId", brandController.updateBrand);
router.patch("/:brandId", brandController.deleteBrand);
// =====================================================
module.exports = router;
