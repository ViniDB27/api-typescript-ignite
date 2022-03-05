import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController";
import { ImportCategoryController } from "../modules/cars/useCases/importCategory/ImportCategoryController";
import { ListCatergoriesContoller } from "../modules/cars/useCases/listCategories/ListCategoriesController";

const categoriesRotues = Router();
const upload = multer({
  dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCatergoriesContoller = new ListCatergoriesContoller();

categoriesRotues.get("/", listCatergoriesContoller.handle);
categoriesRotues.post("/", createCategoryController.handle);
categoriesRotues.post(
  "/import",
  upload.single("file"),
  importCategoryController.handle
);

export { categoriesRotues };
