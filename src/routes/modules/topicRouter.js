const express = require("express");
const router = express.Router();
const topicController = require("../../controllers/topicController");
// =====================================================
router.get("/", topicController.getAll);
router.get("/:topicSlug", topicController.getOne);
router.post("/create", topicController.create);
router.put("/:topicSlug/update", topicController.update);
router.patch("/:topicSlug/remove", topicController.remove);
router.patch("/:topicSlug/restore", topicController.restore);
router.delete("/:topicSlug/delete", topicController.delete);

module.exports = router;
