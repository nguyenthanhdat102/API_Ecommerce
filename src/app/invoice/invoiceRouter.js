const express = require("express");
const router = express.Router();
// =====================================================
const invoiceController = require("./controller/invoiceController");
const {
   getInvoiceDetail,
   getInvoiceDetails,
   createInvoiceDetail,
   updateInvoiceDetail,
   deleteInvoiceDetail,
} = require("./controller/invoiceDetailController");
// =====================================================
// Invoice
router.get("/", invoiceController.getInvoices);
router.get("/:invoiceId", invoiceController.getInvoice);
router.create("/", invoiceController.createInvoice);
router.put("/:invoiceId", invoiceController.updateInvoice);
router.delete("/:invoiceId", invoiceController.deleteInvoice);
// Invoice detail
router.get("/:invoiceId/invoiceDetail", getInvoiceDetails);
router.get("/:invoiceId/invoiceDetail?id=:invoiceId", getInvoiceDetail);
router.post("/:invoiceId/invoiceDetail", createInvoiceDetail);
router.put("/:invoiceId/invoiceDetail?id=:invoiceId", updateInvoiceDetail);
router.delete("/:invoiceId/invoiceDetail?id=:invoiceId", deleteInvoiceDetail);
// =====================================================
module.exports = router;
