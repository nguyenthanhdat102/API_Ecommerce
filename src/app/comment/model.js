const mongoose = require("mongoose");
// =====================================================

const commentSchema = mongoose.Schema(
   {
      postTypeId: { type: mongoose.Types.ObjectId, required: true },
      userId: { type: mongoose.Types.ObjectId, required: true },
      content: { type: String, required: true },
   },
   { timestamps: true }
);

// =====================================================
module.exports = mongoose.model("Comment", commentSchema);
