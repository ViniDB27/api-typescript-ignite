import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { categoriesRotues } from "./categories.routes";
import { spacificationRoutes } from "./spacification.routes";
import { usersRouter } from "./user.routes";

const router = Router();

router.use("/categories", categoriesRotues);
router.use("/spacifications", spacificationRoutes);
router.use("/users", usersRouter);
router.use("/auth", authenticateRoutes);

export { router };
