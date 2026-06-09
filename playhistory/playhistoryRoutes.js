const express = require("express");
const router = express.Router();

const controller = require("./playhistoryController");

// CREATE
router.post("/", controller.createPlayHistory);

// GET ALL
router.get("/", controller.getAllPlayHistory);

// GET BY USER
router.get("/user/:userId", controller.getUserPlayHistory);

// DELETE
router.delete("/:id", controller.deletePlayHistory);

module.exports = router;