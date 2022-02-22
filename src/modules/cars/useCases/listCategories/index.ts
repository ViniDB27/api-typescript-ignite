import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCatergoriesContoller } from "./ListCategoriesController";
import { ListCatergoriesUseCase } from "./ListCategoriesUseCase";

const categoriesRepository = CategoriesRepository.getInstance();
const listCatergoriesUseCase = new ListCatergoriesUseCase(categoriesRepository);
const listCatergoriesContoller = new ListCatergoriesContoller(
  listCatergoriesUseCase
);

export { listCatergoriesContoller };
