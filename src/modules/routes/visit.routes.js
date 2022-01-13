const express = require("express");
const router = express.Router();

const { getAllVisits } = require("../controllers/visit.controller");

router.get("/getAllVisits", getAllVisits);

module.exports = router;
