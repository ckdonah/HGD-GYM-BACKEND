import { Router } from "express";
import { createClass, getClasses, updateClass, deleteClass } from "../controllers/class.controller.js";

const router = Router();
router.post("/classes", createClass);
router.get("/classes", getClasses);
router.put("/classes/:id", updateClass);
router.delete("/classes/:id", deleteClass);

export default router;
