const express = require("express");
const router = express.Router();
// =====================================================
const {
   getVouchers,
   getVoucher,
   createVoucher,
   updateVoucher,
   deleteVoucher,
} = require("./voucherController");
// =====================================================
router.get("/", getVouchers);
router.get("/:voucherId", getVoucher);
router.post("/", createVoucher);
router.put("/:voucherId", updateVoucher);
router.delete("/:voucherId", deleteVoucher);
// =====================================================
module.exports = router;
