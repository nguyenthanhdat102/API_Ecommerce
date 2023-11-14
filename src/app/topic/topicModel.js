const mongoose = require("mongoose");
// =====================================================

const topicSchema = mongoose.Schema(
   {
      name: { type: String, require: true, unique: true },
      slug: { type: String, require: true, unique: true },
      status: { type: Boolean, default: true },
   },
   { timestamps: true }
);

// =====================================================
module.exports = mongoose.model("Topic", topicSchema);
