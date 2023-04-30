import { Router } from "express";
import ClientRoutes from "./Client.routes";

const router = Router();

router.use("/client", ClientRoutes);

export default router;