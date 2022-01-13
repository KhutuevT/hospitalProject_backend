const express = require("express");
const router = express.Router();

const {
  getAllVisits,
  addNewVisits,
  updateVisit,
} = require("../controllers/visit.controller");

router.get("/getAllVisits", getAllVisits);
router.post("/addNewVisits", addNewVisits);
router.patch("/updateVisit", updateVisit);

module.exports = router;
