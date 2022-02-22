import { Router } from "express";

import { categoriesRotues } from "./categories.routes";
import { spacificationRoutes } from "./spacification.routes";

const router = Router();

router.use("/categories", categoriesRotues);
router.use("/spacifications", spacificationRoutes);

export { router };
