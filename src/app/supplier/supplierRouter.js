const express = require("express");
const router = express.Router();
// =====================================================
const {
   getSuppliers,
   getSupplier,
   createSupplier,
   updateSupplier,
   deleteSupplier,
} = require("./supplierController");
// =====================================================
router.get("/", getSuppliers);
router.get("/:supplierId", getSupplier);
router.post("/", createSupplier);
router.put("/:supplierId", updateSupplier);
router.delete("/:supplierId", deleteSupplier);
// =====================================================
module.exports = router;
