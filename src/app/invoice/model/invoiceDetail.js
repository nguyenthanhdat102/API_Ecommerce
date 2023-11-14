const mongoose = require("mongoose");
// =====================================================

const invoiceDetailSchema = mongoose.Schema(
   {
      invoice: {
         type: mongoose.Types.ObjectId,
         required: true,
         ref: "Invoice",
      },
      product: {
         type: mongoose.Types.ObjectId,
         required: true,
         ref: "Product",
      },
      quantity: { type: mongoose.Types.ObjectId, required: true },
      price: { type: mongoose.Types.ObjectId, required: true },
   },
   {
      timestamps: true,
   }
);

// =====================================================
module.exports = mongoose.model("Invoice Detail", invoiceDetailSchema);
