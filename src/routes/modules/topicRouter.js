const express = require("express");
const router = express.Router();
// =====================================================
const getAll = require("../../app/topic/controller/getAll");
const getOne = require("../../app/topic/controller/getOne");
const create = require("../../app/topic/controller/create");
const update = require("../../app/topic/controller/update");
const remove = require("../../app/topic/controller/remove");
const restore = require("../../app/topic/controller/restore");
const deleteTopic = require("../../app/topic/controller/delete");
// =====================================================
router.get("/", getAll);
router.get("/:topicSlug", getOne);
router.post("/create", create);
router.put("/:topicSlug/update", update);
router.patch("/:topicSlug/remove", remove);
router.patch("/:topicSlug/restore", restore);
router.delete("/:topicSlug/delete", deleteTopic);

module.exports = router;
