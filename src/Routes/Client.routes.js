import { Router } from "express";
import * as ClientController from "../Controllers/Client.controller";
import {verifyToken} from "../Utils/verifyToken";

const router = Router();

router.post("/", verifyToken,ClientController.createClient);
router.get("/", verifyToken,ClientController.getALLClients);
router.get("/:id",verifyToken, ClientController.getOneClientById);
router.put("/:id",verifyToken, ClientController.updateClientById);
router.delete("/:id",verifyToken, ClientController.deleteClientById);

export default router;