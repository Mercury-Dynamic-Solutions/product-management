const express = require("express")
const router = express.Router();

const checkAuth = require("../middleware/check-auth")
const UsersController = require("../controllers/usersController")

router.post("/signup", UsersController.sign_up_user)

router.post("/login", UsersController.login_user)

.delete("/:userId", checkAuth, UsersController.delete_user)

module.exports = router; 