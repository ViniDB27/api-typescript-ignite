import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { ListCatergoriesContoller } from "./ListCategoriesController";
import { ListCatergoriesUseCase } from "./ListCategoriesUseCase";

const categoriesRepository = new CategoriesRepository();
const listCatergoriesUseCase = new ListCatergoriesUseCase(categoriesRepository);
const listCatergoriesContoller = new ListCatergoriesContoller(
  listCatergoriesUseCase
);

export { listCatergoriesContoller };
