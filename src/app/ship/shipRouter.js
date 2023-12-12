const express = require("express");
const router = express.Router();
// =====================================================
const {
   getShips,
   getShip,
   createShip,
   updateShip,
   deleteShip,
} = require("./shipController");
// =====================================================
router.get("/", getShips);
router.get("/:supplierId", getShip);
router.post("/", createShip);
router.put("/:supplierId", updateShip);
router.delete("/:supplierId", deleteShip);
// =====================================================
module.exports = router;
