import { Router } from "express";

import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";

const spacificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

spacificationRoutes.post("/", createSpecificationController.handle);

export { spacificationRoutes };
