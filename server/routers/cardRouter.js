const express = require("express");
const router = express.Router();

const cardController = require("../controllers/cardController");

router
  .get("/", cardController.generateCard);

module.exports = router;
