const express = require("express");
const router = express.Router();
// =====================================================
const supplierController = require("./supplierController");
// =====================================================
router.get("/", supplierController.getSuppliers);
router.get("/:supplierId", supplierController.getSupplier);
router.post("/", supplierController.createSupplier);
router.put("/:supplierId", supplierController.updateSupplier);
router.delete("/:supplierId", supplierController.deleteSupplier);
// =====================================================
module.exports = router;
