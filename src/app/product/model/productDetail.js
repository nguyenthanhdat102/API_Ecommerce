const mongoose = require("mongoose");
// =====================================================

const productDetailSchema = mongoose.Schema(
   {
      product: {
         type: mongoose.Types.ObjectId,
         required: true,
         ref: "Product",
      },
      gallery: [
         {
            name: { type: String },
            image: { type: String },
         },
      ],
      type: { type: String },
      regularPrice: { type: Number, required: true },
      salePrice: { type: Number },
      size: [
         {
            _id: new mongoose.Types.ObjectId(),
            name: { type: String },
            width: { type: Number },
            height: { type: Number },
            weight: { type: Number },
         },
      ],
   },
   {
      timestamps: true,
   }
);

// =====================================================
module.exports = mongoose.model("Product Detail", productDetailSchema);
