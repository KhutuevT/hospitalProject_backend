const express = require("express");
const router = express.Router();
const authMiddleware = require('../../middleware/authMiddleware')

const {
  getAllVisits,
  addNewVisits,
  updateVisit,
  deleteVisit,
} = require("../controllers/visit.controller");

router.get("/getAllVisits", authMiddleware, getAllVisits);
router.post("/addNewVisits", authMiddleware, addNewVisits);
router.patch("/updateVisit", authMiddleware, updateVisit);
router.delete("/deleteVisit", authMiddleware, deleteVisit);

module.exports = router;
