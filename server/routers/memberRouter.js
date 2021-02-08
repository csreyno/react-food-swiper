const express = require("express");
const router = express.Router();

const memberController = require("../controllers/memberController");

router
  .get("/like", memberController.membersOnly)
  .post("/addlike", memberController.addLike);

module.exports = router;
