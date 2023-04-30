import { Router } from "express";
import * as ClientController from "../Controllers/Client.controller";

const router = Router();

router.post("/", ClientController.createClient);
router.get("/", ClientController.getALLClients);
router.get("/:id", ClientController.getOneClientById);
router.put("/:id", ClientController.updateClientById);
router.delete("/:id", ClientController.deleteClientById);

export default router;