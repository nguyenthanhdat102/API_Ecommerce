const mongoose = require("mongoose");
// =====================================================
module.exports = mongoose.model(
   "Topic",
   mongoose.Schema(
      {
         name: { type: String, require: true, unique: true },
         slug: { type: String, require: true, unique: true },
         status: { type: Boolean, default: true },
      },
      { timestamps: true }
   )
);
