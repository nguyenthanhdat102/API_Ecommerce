const mongoose = require("mongoose");
// =====================================================

const shipSchema = mongoose.Schema(
   {
      name: { type: String, required: true },
      price: { type: Number, required: true, min: 0 },
   },
   {
      timestamps: true,
   }
);

// =====================================================
module.exports = mongoose.model("Ship", shipSchema);
