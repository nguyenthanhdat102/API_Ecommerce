const express = require("express");
const router = express.Router();
// =====================================================
const productController = require("./controller/productController");
const galleryController = require("./controller/galleryController");
// =====================================================
// PRODUCT
router.get("/", productController.getProducts);
router.get("/:productId", productController.getProduct);
router.post("/", productController.createProduct);
router.put("/:productId", productController.updateProduct);
router.patch("/:productId/remove", productController.removeProduct);
router.patch("/:productId/restore", productController.restoreProduct);
router.delete("/:productId", productController.deleteProduct);
// PRODUCT GALLERY
router.get("/:productId/gallery", galleryController.getAllImage);
router.post("/:productId/gallery", galleryController.AddImage);
router.put("/:productId/gallery?id=:imgId", galleryController.updateImage);
router.delete('/"productId/gallery?id=:imgId', galleryController.deleteImage);


// =====================================================
module.exports = router;
