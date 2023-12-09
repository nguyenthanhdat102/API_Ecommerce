const mongoose = require("mongoose");
// =====================================================
const productVariantSchema = mongoose.Schema(
   {
      product: {
         type: mongoose.Types.ObjectId,
         required: true,
         ref: "Product",
      },
      size: { type: String, default: null },
      color: { type: String, default: null },
      regularPrice: { type: Number, min: 0 },
      salePrice: { type: Number, min: 0 },
      stockQuantity: { type: Number, default: 0 },
   },
   { timestamps: true }
);

module.exports = mongoose.model("Product Variant", productVariantSchema);
