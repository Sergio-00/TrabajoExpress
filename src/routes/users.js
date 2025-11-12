import {
  createUser,
  getAllUsers,
  getUserById,
} from "../controllers/users.controller.js";
import express from "express";

const router = express.Router();

router.post("/", createUser);
router.get("/", getAllUsers);
router.get("/:id", getUserById);

export default router;
