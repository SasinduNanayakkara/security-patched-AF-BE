import { Router } from "express";
import * as AdminController from "../Controllers/Admin.controller";

const router = Router();

router.post("/", AdminController.addAdmin);
router.get("/", AdminController.getAdmins);
router.get("/:id", AdminController.getOneAdmin);
router.put("/:id", AdminController.updateAdmin);
router.delete("/:id", AdminController.deleteAdmin);

export default router;