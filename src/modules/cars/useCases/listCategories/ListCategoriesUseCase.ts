import { Category } from "../../model/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class ListCatergoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  exucute(): Category[] {
    const categories = this.categoriesRepository.list();
    return categories;
  }
}

export { ListCatergoriesUseCase };
