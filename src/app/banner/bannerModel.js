const mongoose = require("mongoose");
// =====================================================

const bannerSchema = mongoose.Schema(
   {
      name: { type: String, require: true },
      image: { type: String, default: 'anh-banner.jpg' },
      status: { type: Boolean, default: true },
   },
   {
      timestamps: true,
   }
);

// =====================================================
module.exports = mongoose.model("Brand", bannerSchema);
