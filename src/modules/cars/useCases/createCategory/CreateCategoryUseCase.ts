import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  async execute({ name, description }: IRequest) {
    const categoryArleadyExisty = await this.categoriesRepository.findByName(
      name
    );

    if (categoryArleadyExisty) throw new Error("Category already exist!");

    await this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
