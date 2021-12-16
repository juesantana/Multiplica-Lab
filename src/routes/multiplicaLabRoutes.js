const express = require("express");
const router = express.Router();
const controller = require ("../controller/monitoresController");

router.get("/all", controller.getAll);
router.get("/find/:id", controller.getById);
router.get("/name", controller.getByName);
router.post("/create", controller.createMonitor);
router.patch("/update/:id", controller.updateMonitor);
router.delete("/delete/:id", controller.deleteMonitor);
module.exports = router