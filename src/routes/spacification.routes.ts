import { Router } from "express";

import { createSpecificationController } from "../modules/cars/useCases/createSpecification";

const spacificationRoutes = Router();

spacificationRoutes.post("/", createSpecificationController.handle);

export { spacificationRoutes };
