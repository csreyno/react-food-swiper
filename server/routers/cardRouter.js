const express = require("express");
const router = express.Router();

const cardController = require("../controllers/cardController");

router
  .get("/card", cardController.generateList)
  .post("/card", cardController.generateCard);

module.exports = router;
