import {
  createTask,
  getAllTasks,
  getTasksByUser,
} from "../controllers/tasks.controller.js";
import express from "express";

const router = express.Router();

router.post("/", createTask);
router.get("/", getAllTasks);
router.get("/user/:userId", getTasksByUser);

export default router;
