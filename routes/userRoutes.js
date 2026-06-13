const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const verifyToken = require("../middleware/auth");

const { validateRegister } = require("../middleware/validation");

router.post( "/register", validateRegister, userController.registerUser );
router.post("/login", userController.loginUser);

router.put("/change-password", verifyToken, userController.changePassword);

module.exports = router;
