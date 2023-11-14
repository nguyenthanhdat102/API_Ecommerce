const express = require("express");
const router = express.Router();
// =====================================================
const getAll = require("./controller/getAll");
const getOne = require("./controller/getOne");
const create = require("./controller/create");
const update = require("./controller/update");
const remove = require("./controller/remove");
const restore = require("./controller/restore");
const deleteTopic = require("./controller/delete");
// =====================================================
router.get("/", getAll);
router.get("/:topicSlug", getOne);
router.post("/create", create);
router.put("/:topicSlug/update", update);
router.patch("/:topicSlug/remove", remove);
router.patch("/:topicSlug/restore", restore);
router.delete("/:topicSlug/delete", deleteTopic);

module.exports = router;
