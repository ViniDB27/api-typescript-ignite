import { Router } from "express";

import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCatergoriesContoller } from "../modules/cars/useCases/listCategories";

const categoriesRotues = Router();

categoriesRotues.get("/", listCatergoriesContoller.handle);
categoriesRotues.post("/", createCategoryController.handle);

export { categoriesRotues };
