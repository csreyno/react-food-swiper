const express = require("express");
const router = express.Router();

const listController = require("../controllers/listController");

router
  .get("/retrieveList", listController.generateList)
  .post("/list", listController.processForm);

module.exports = router;
