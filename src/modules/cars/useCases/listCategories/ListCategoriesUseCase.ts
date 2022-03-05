import { inject, injectable } from "tsyringe";

import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

@injectable()
class ListCatergoriesUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}

  async exucute(): Promise<Category[]> {
    const categories = await this.categoriesRepository.list();
    return categories;
  }
}

export { ListCatergoriesUseCase };
