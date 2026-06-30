const express = require("express");
const router = express.Router();

const authMiddleware = require("../auth/authMiddleware");

const {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
} = require("./userController");

// CRUD ROUTES
router.post("/", authMiddleware, createUser);
router.get("/", authMiddleware, getAllUsers);
router.get("/:id", authMiddleware, getUserById);
router.put("/:id", authMiddleware, updateUser);
router.delete("/:id", authMiddleware, deleteUser);

module.exports = router;