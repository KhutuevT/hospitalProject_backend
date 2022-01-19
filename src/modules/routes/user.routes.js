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

// "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTdmMmY5ZjU1N2VhYWQ1Zjg5ODViMCIsImlhdCI6MTY0MjU5MDk2OSwiZXhwIjoxNjQyNjc3MzY5fQ.hvvdXD26dg-3nad_vsplpeotzxzWEnRebwNkcKUrgxo"
// {
//   "login": "timon_18",
//   "password": "1q2w3e4r"
// }