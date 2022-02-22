import { Router } from "express";

import { SpacificationRepository } from "../modules/cars/repositories/SpecificationsRepository";
import { CreateSpecificationService } from "../modules/cars/service/CreateSpecificationService";

const spacificationRoutes = Router();
const spacificationRepository = new SpacificationRepository();

spacificationRoutes.post("/", (request, response) => {
  const createSpecificationService = new CreateSpecificationService(
    spacificationRepository
  );
  const { name, description } = request.body;

  createSpecificationService.execut({ name, description });

  return response.status(201).send();
});

export { spacificationRoutes };
