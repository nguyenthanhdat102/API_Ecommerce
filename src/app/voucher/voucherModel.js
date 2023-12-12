const mongoose = require("mongoose");
// =====================================================

const voucherSchema = mongoose.Schema(
   {
      code: { type: String, required: true },
      name: { type: String, required: true },
      value: { type: Number, required: true },
      quantity: { type: Number },
      used: { type: Number },
      startDay: { type: Date },
      endDay: { type: Date },
   },
   {
      timestamps: true,
   }
);

// =====================================================
module.exports = mongoose.model("Voucher", voucherSchema);
