const express = require("express");
const router = express.Router();
// =====================================================
const {
   getPosts,
   getPost,
   createPost,
   updatePost,
   deletePost,
} = require("./postController");
// =====================================================
router.get("/", getPosts);
router.get("/:supplierId", getPost);
router.post("/", createPost);
router.put("/:supplierId", updatePost);
router.delete("/:supplierId", deletePost);
// =====================================================
module.exports = router;
