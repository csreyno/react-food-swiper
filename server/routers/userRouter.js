const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router
  .post("/new", userController.processNewUser);
router
  .post("/login", userController.processLogin);

router.get('/login-status', userController.loginStatus)
router.post("/logout", userController.logout);

module.exports = router;
