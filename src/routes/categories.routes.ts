import { Router } from "express";
import multer from "multer";

import createCategoryController from "../modules/cars/useCases/createCategory";
import importCategoryController from "../modules/cars/useCases/importCategory";
import listCatergoriesContoller from "../modules/cars/useCases/listCategories";

const categoriesRotues = Router();
const upload = multer({
  dest: "./tmp",
});

categoriesRotues.get("/", listCatergoriesContoller().handle);
categoriesRotues.post("/", createCategoryController().handle);
categoriesRotues.post(
  "/import",
  upload.single("file"),
  importCategoryController().handle
);

export { categoriesRotues };
