import { Router } from "express";

import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { CreateCategoryService } from "../modules/cars/service/CreateCategoryService";

const categoriesRotues = Router();
const categoryRepository = new CategoriesRepository();

categoriesRotues.get("/", (request, response) => {
  return response.json(categoryRepository.list());
});

categoriesRotues.post("/", (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoryRepository);

  createCategoryService.execute({ name, description });

  return response.status(201).send();
});

export { categoriesRotues };
