import { Router } from "express";
import * as ConsultantController from "../Controllers/Consultant.controller";
import { verifyToken } from "../Utils/verifyToken";

const router = Router();

router.post("/",verifyToken, ConsultantController.addConsultant);
router.get("/", ConsultantController.getConsultants);
router.get("/:id", ConsultantController.getOneConsultant);
router.put("/:id", ConsultantController.updateConsultant);
router.delete("/:id",verifyToken, ConsultantController.deleteConsultant);
router.put("/status/:id", ConsultantController.updateConsultantStatus);

export default router;