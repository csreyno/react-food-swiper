const express = require("express");
const router = express.Router();

const postController = require("../controllers/postController");

router.post("/addPost", postController.addPost);

module.exports = router;
