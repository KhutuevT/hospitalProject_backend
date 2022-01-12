const express = require("express");
const userController = require("../controllers/user.controller");
const router = express.Router();

const {registration} = userController

router.post("/registration", registration);

module.exports = router;
