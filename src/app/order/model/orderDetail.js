const mongoose = require("mongoose");
// =====================================================

const orderDetailSchema = mongoose.Schema(
   {
      order: { type: mongoose.Types.ObjectId, ref: "Order", required: true },
      product: { type: mongoose.Types.ObjectId, ref: "Product", require: true },
      productName: { type: String, required: true },
      price: { type: Number, required: true },
      quantity: { type: Number, default: 1 },
   },
   {
      timestamps: true,
   }
);

// =====================================================
module.exports = mongoose.model("Order Detail", orderDetailSchema);
