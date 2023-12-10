const express = require("express");
const router = express.Router();
// =====================================================
const productController = require("./controller/productController");
const galleryController = require("./controller/galleryController");
const {
   getVariant,
   getVariants,
   createVariant,
   updateVariant,
   deleteVariant,
} = require("./controller/productVariantController");
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
//PRODUCT VARIANT
router.get("/:productId/variant", getVariants);
router.get("/:productId/variant?id=:variantId", getVariant);
router.post("/:productId/variant", createVariant);
router.put("/:productId/variant?id=:variantId", updateVariant);
router.delete("/:productId/variant?id=:variantId", deleteVariant);
// =====================================================
module.exports = router;
