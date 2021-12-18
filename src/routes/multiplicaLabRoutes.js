const express = require("express");
const router = express.Router();
const controller = require ("../controller/monitoresController");
const { checkAuth } = require("../middlewares/auth");

router.get("/all", checkAuth, controller.getAll);
router.get("/find/:id",checkAuth, controller.getById);
router.get("/name", checkAuth, controller.getByName);
router.get("/bairro",checkAuth, controller.getByBairro);
router.get("/materia",checkAuth, controller.getBySubject);
router.post("/create", controller.createMonitor);
router.put("/update/:id", checkAuth, controller.updateMonitor);
router.delete("/delete/:id", checkAuth, controller.deleteMonitor);
router.post("/login", controller.loginMonitores)
module.exports = router