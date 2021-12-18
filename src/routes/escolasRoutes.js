const express = require("express");
const router = express.Router();
const controllerEscola = require ("../controller/escolasLoginController");
const { checkAuth } = require("../middlewares/auth");


router.post("/create", controllerEscola.createLogin);

router.post("/login", controllerEscola.loginEscola);

module.exports = router

