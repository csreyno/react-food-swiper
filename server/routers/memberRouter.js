const express = require("express");
const router = express.Router();
const memberController = require("../controllers/memberController");
console.log(memberController);

router.post("/addlike", memberController.addLike);

module.exports = router;
