import { Router } from "express";
import { v4 as uuidv4 } from "uuid";

import { Category } from "../model/category";
import { CategoryRepository } from "../repositories/categoryRepository";

const categoriesRotues = Router();
const categoryRepository = new CategoryRepository();

categoriesRotues.post("/", (request, response) => {
  const { name, description } = request.body;

  categoryRepository.create({ name, description });

  return response.status(201).send();
});

export { categoriesRotues };
