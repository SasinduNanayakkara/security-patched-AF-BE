import { Router } from "express";
import * as ConsultantController from "../Controllers/Consultant.controller";

const router = Router();

router.post("/", ConsultantController.addConsultant);
router.get("/", ConsultantController.getConsultants);
router.get("/:id", ConsultantController.getOneConsultant);
router.put("/:id", ConsultantController.updateConsultant);
router.delete("/:id", ConsultantController.deleteConsultant);

export default router;