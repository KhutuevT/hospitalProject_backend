const express = require("express");
const router = express.Router();

const {
  registration,
  authorization,
} = require("../controllers/user.controller");
const { getAllVisits } = require("../controllers/visit.controller");

router.post("/registration", registration);
router.post("/authorization", authorization);

module.exports = router;
