const mongoose = require("mongoose");
// =====================================================

const invoiceSchema = mongoose.Schema(
   {
      supplier: { type: mongoose.Types.ObjectId, required: true, ref: "Supplier" },
      phoneNumber: { type: String, required: true },
      staffName: { type: String, required: true },
   },
   {
      timestamps: true,
   }
);

// =====================================================
module.exports = mongoose.model("Invoice", invoiceSchema);
