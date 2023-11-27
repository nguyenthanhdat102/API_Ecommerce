const express = require("express");
const router = express.Router();
// =====================================================
const productController = require("./controller/productController");
const galleryController = require("./controller/galleryController");
const productDetailController = require("./controller/productDetailController");
const sizeController = require("./controller/sizeController");
// =====================================================
// PRODUCT
router.get("/", productController.getProducts);
router.get("/:productId", productController.getProduct);
router.post("/", productController.createProduct);
router.put("/:productId", productController.updateProduct);
router.patch("/:productId/remove", productController.removeProduct);
router.patch("/:productId/restore", productController.restoreProduct);
router.delete("/:productId", productController.deleteProduct);
// PRODUCT TYPE
router.get("/:productId/type", productDetailController.getAllProductType);
router.get("/:productId/type?id=:productTypeId", productDetailController.getProductType);
router.post("/:productId/type", productDetailController.createProductType);
// PRODUCT SIZE
router.get("/:productId/type?id=:productTypeId", sizeController.getSizes);
router.post("/:productId/type?id=:productTypeId", sizeController.createSize);
router.put("/:productId/type?id=:productTypeId&size=:sizeId",sizeController.updateSize);
router.delete("/:productId/type?id=:productTypeId&size=:sizeId",sizeController.deleteSize);
// PRODUCT GALLERY
router.get("/:productId/gallery", galleryController.getAllImage);
router.post("/:productId/gallery", galleryController.addImage);
router.put("/:productId/gallery?id=:imgId", galleryController.updateImage);
router.delete('/"productId/gallery?id=:imgId', galleryController.deleteImage);

// =====================================================
module.exports = router;
