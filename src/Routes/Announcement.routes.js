import { Router } from "express";
import * as AnnouncementController from "../Controllers/Announcemnt.controller";

const router = Router();

router.post("/", AnnouncementController.addAnnouncement);
router.get("/", AnnouncementController.getAnnouncements);
router.get("/:id", AnnouncementController.getOneAnnouncement);
router.put("/:id", AnnouncementController.updateAnnouncement);
router.delete("/:id", AnnouncementController.deleteAnnouncement);

export default router;