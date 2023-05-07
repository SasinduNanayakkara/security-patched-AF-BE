import { Router } from "express";
import * as AdminController from "../Controllers/Admin.controller";

const router = Router();

router.post("/", AdminController.addAdmin);
router.get("/", AdminController.getAdmins);

export default router;