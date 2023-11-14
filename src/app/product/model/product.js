const mongoose = require("mongoose");
// =====================================================

const productSchema = mongoose.Schema(
   {
      name: { type: String, required: true },
      thumbnail: { type: String },
      category: { type: mongoose.Types.ObjectId, ref: "Category" },
      brand: { type: mongoose.Types.ObjectId, ref: "Brand" },
      view: { type: Number, min: 0, default: 0 },
      comment: { type: mongoose.Types.ObjectId, ref: "Comment" },
   },
   {
      timestamps: true,
   }
);

// =====================================================
module.exports = mongoose.model("Product", productSchema);
