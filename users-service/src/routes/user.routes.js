const express = require("express");

const router = express.Router();

const userController = require("../controllers/user.controller");
const { verificarToken } = require("../middleware/auth.middleware");

router.get("/", verificarToken, userController.getAllUsers);

router.get("/:id", userController.getUserById);

router.post("/register", userController.register);

router.post("/login", userController.login);

module.exports = router;