const express = require("express");
const router = express.Router();

const userController = require("../controllers/usercontroller");

router
  .get("/new", userController.newUser)
  .post("/new", userController.processNewUser);
router
  .get("/login", userController.login)
  .post("/login", userController.processLogin);

router.get("/logout", userController.logout);

module.exports = router;
