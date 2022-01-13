const express = require("express");
const router = express.Router();

const { getAllVisits, addNewVisits } = require("../controllers/visit.controller");

router.get("/getAllVisits", getAllVisits);
router.post("/addNewVisits", addNewVisits);

module.exports = router;
