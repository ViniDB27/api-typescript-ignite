import { Router } from "express";

import { ensureAuthenticated } from "../middleware/ensureAuthenticated";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";

const spacificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

spacificationRoutes.use(ensureAuthenticated);
spacificationRoutes.post("/", createSpecificationController.handle);

export { spacificationRoutes };
