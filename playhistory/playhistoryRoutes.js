const express = require("express");
const router = express.Router();

const authMiddleware = require("../auth/authMiddleware");
const controller = require("./playhistoryController");

// CREATE
router.post("/", authMiddleware, controller.createPlayHistory);

// GET ALL
router.get("/", authMiddleware, controller.getAllPlayHistory);

// GET BY USER
router.get("/user/:userId", authMiddleware, controller.getUserPlayHistory);

// DELETE
router.delete("/:id", authMiddleware, controller.deletePlayHistory);

module.exports = router;