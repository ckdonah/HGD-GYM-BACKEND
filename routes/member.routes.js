import { Router } from "express";
import { addMember, getMembers, updateMember } from "../controllers/member.controller.js";

const router = Router();
router.post("/members", addMember);
router.get("/members", getMembers);
router.put("/members/:id", updateMember);

export default router;