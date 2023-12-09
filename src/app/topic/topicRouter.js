const express = require("express");
const router = express.Router();
// =====================================================
const {
   getTopics,
   getTopic,
   createTopic,
   updateTopic,
   removeTopic,
   restoreTopic,
   deleteTopic,
} = require("./topicController");
// =====================================================
router.get("/", getTopics);
router.get("/:topicSlug", getTopic);
router.post("/create", createTopic);
router.put("/:topicSlug/update", updateTopic);
router.patch("/:topicSlug/remove", removeTopic);
router.patch("/:topicSlug/restore", restoreTopic);
router.delete("/:topicSlug/delete", deleteTopic);

module.exports = router;
