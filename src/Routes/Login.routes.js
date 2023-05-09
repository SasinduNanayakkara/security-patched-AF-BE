import { Router } from "express";
import * as LoginController from "../Controllers/Login.controller";

const router = Router();

router.post("/", LoginController.login);

export default router;