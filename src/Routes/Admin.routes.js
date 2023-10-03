import { Router } from "express";
import * as AdminController from "../Controllers/Admin.controller";
import { verifyToken } from "../Utils/verifyToken";

const router = Router();

router.post("/",verifyToken, AdminController.addAdmin);
router.get("/", AdminController.getAdmins);
router.get("/:id", AdminController.getOneAdmin);
router.put("/:id", AdminController.updateAdmin);
router.delete("/:id",verifyToken, AdminController.deleteAdmin);

export default router;