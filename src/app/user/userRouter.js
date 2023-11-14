const express = require("express");
const router = express.Router();
// =====================================================
const userCtrl = require("./userController");
// =====================================================
router.get("/", userCtrl.getUsers);
router.get("/:userId", userCtrl.getUser);
router.post("/create", userCtrl.createUser);
// router.put("/:userId/update", update);
// router.patch("/:userId/remove", remove);
// router.patch("/:userId/restore", restore);
// router.delete("/:userId/delete", this.delete);

module.exports = router;
