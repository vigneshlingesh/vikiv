const express = require("express");
const router = express.Router();
const authController = require("../controllers/authControll");

router.post("/register", authController.register);

router.post("/login", authController.register);

module.exports = router;