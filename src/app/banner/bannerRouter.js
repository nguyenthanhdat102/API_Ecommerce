const express = require("express");
const router = express.Router();
// =====================================================
const bannerController = require("./bannerController");
// =====================================================
router.get("/", bannerController.getBanners);
router.get("/:cateId", bannerController.getBanner);
router.post("/", bannerController.createBanner);
router.put("/:cateId", bannerController.updateBanner);
router.delete("/:cateId", bannerController.deleteBanner);
// =====================================================
module.exports = router;
