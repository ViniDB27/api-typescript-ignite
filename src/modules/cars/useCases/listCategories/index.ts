import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCatergoriesContoller } from "./ListCategoriesController";
import { ListCatergoriesUseCase } from "./ListCategoriesUseCase";

export default (): ListCatergoriesContoller => {
  const categoriesRepository = new CategoriesRepository();
  const listCatergoriesUseCase = new ListCatergoriesUseCase(
    categoriesRepository
  );
  const listCatergoriesContoller = new ListCatergoriesContoller(
    listCatergoriesUseCase
  );

  return listCatergoriesContoller;
};
