const mongoose = require("mongoose");
// =====================================================

const brandSchema = mongoose.Schema(
   {
      name: { type: String, require: true },
      slug: { type: String },
      status: { type: Boolean, default: true },
   },
   {
      timestamps: true,
   }
);

// =====================================================
module.exports = mongoose.model("Brand", brandSchema);
