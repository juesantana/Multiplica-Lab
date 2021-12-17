const express = require("express");
const router = express.Router();
const controller = require ("../controller/monitoresController");
const { checkAuth } = require("../middlewares/auth");

router.get("/all", checkAuth, controller.getAll);
router.get("/find/:id", controller.getById);
router.get("/name", controller.getByName);
router.post("/create", controller.createMonitor);
router.patch("/update/:id", checkAuth, controller.updateMonitor);
router.delete("/delete/:id", checkAuth, controller.deleteMonitor);
router.post("/login", controller.loginMonitores)
module.exports = router