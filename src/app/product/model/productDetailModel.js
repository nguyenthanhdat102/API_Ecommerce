const mongoose = require("mongoose");
// =====================================================

const productDetailSchema = mongoose.Schema(
   {
      product: {
         type: mongoose.Types.ObjectId,
         required: true,
         ref: "Product",
      },
      typeName: { type: String },
      regularPrice: { type: Number, required: true },
      salePrice: { type: Number },
      size: [
         {
            _id: new mongoose.Types.ObjectId(),
            sizeName: { type: String },
            width: { type: Number, default: 0 },
            height: { type: Number, default: 0 },
            weight: { type: Number, default: 0 },
         },
      ],
   },
   {
      timestamps: true,
   }
);

// =====================================================
module.exports = mongoose.model("Product Detail", productDetailSchema);
