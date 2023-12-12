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
         ref: "Product Variant",
      },
      quantity: { type: Number, default: 0 },
      price: { type: Number, default: 0 },
   },
   {
      timestamps: true,
   }
);

// =====================================================
module.exports = mongoose.model("Invoice Detail", invoiceDetailSchema);
