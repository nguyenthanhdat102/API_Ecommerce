const mongoose = require("mongoose");
// =====================================================

const commentSchema = mongoose.Schema(
   {
      userId: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
      content: { type: String, required: true },
   },
   { timestamps: true }
);

// =====================================================
module.exports = mongoose.model("Comment", commentSchema);
