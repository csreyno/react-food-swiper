const express = require("express");
const router = express.Router();
const multer = require("multer")
const UPLOAD_URL = "/images";
const recipeController = require("../controllers/recipeController");
const timestamp = (new Date()).getTime()
// const upload = multer({ dest: "public" + UPLOAD_URL });
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public' + UPLOAD_URL)
  },
  filename: function (req, file, cb) {
    cb(null, timestamp + file.originalname)
  }
})
const upload = multer({ storage: storage })

router.post("/add", recipeController.addRecipe);

router.post("/image/:id", upload.single("file"), recipeController.addImage)
module.exports = router;
