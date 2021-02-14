const express = require("express");
const router = express.Router();
const multer = require("multer")
const UPLOAD_URL = "/images";
const recipeController = require("../controllers/recipeController");
const upload = multer({ dest: "public" + UPLOAD_URL });

router.post("/add", recipeController.addRecipe);

router.post("/image/:id", upload.single("file"), recipeController.addImage)
module.exports = router;
