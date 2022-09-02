import { AppError } from "../../../../errors/AppErrors";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
import { CategoriesRepositoryInMemory } from "../../repositories/in-memory/CategoriesRepositoryInMemory";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

let createCategoryUseCase: CreateCategoryUseCase;
let createCategoryRepository: ICategoriesRepository;

describe("Create Category", () => {
  beforeEach(() => {
    createCategoryRepository = new CategoriesRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(createCategoryRepository);
  });

  it("Should be able to create a new category", async () => {
    const categoryDto = {
      name: "Category Test",
      description: "Category Test Description",
    };

    await createCategoryUseCase.execute(categoryDto);

    const category = await createCategoryRepository.findByName(
      categoryDto.name
    );

    expect(category.name).toHaveProperty("id");
  });

  it("Should not be able to create a new category with same name", async () => {
    expect(async () => {
      const categoryDto = {
        name: "Category Test",
        description: "Category Test Description",
      };

      await createCategoryUseCase.execute(categoryDto);
      await createCategoryUseCase.execute(categoryDto);
    }).rejects.toBeInstanceOf(AppError);
  });
});
