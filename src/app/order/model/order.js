const mongoose = require("mongoose");
// =====================================================

const orderSchema = mongoose.Schema(
   {
      user: { type: mongoose.Types.ObjectId, ref: "User", required: true },
      ship: { type: mongoose.Types.ObjectId, ref: "Ship" },
      voucher: { type: mongoose.Types.ObjectId, ref: "Voucher" },
      paymentMethod: { type: Number, default: 0 },
      status: { type: Number, default: 0 }, // 0 chưa xác nhận
      shipper: { type: String },
   },
   {
      timestamps: true,
   }
);

// =====================================================
module.exports = mongoose.model("Order", orderSchema);
