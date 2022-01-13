const express = require("express");
const router = express.Router();

const {
  getAllVisits,
  addNewVisits,
  updateVisit,
  deleteVisit,
} = require("../controllers/visit.controller");

router.get("/getAllVisits", getAllVisits);
router.post("/addNewVisits", addNewVisits);
router.patch("/updateVisit", updateVisit);
router.delete("/deleteVisit", deleteVisit);

module.exports = router;
