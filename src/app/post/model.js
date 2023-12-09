const mongoose = require("mongoose");
// =====================================================

const postSchema = mongoose.Schema({
   title: { type: String, required: true },
   thumbnail: { type: String },
   topic: { type: mongoose.Types.ObjectId, ref: "Topic" },
   description: { type: String },
   content: { type: String },
   slug: { type: string },
});

// =====================================================
module.exports = mongoose.model("Post", postSchema);
