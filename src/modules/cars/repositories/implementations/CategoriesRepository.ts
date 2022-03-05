import { getRepository, Repository } from "typeorm";
import { Category } from "../../entities/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
  private respository: Repository<Category>;

  constructor() {
    this.respository = getRepository(Category);
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const categories = this.respository.create({
      name,
      description,
    });

    await this.respository.save(categories);
  }

  async list(): Promise<Category[]> {
    const categories = await this.respository.find();
    return categories;
  }

  async findByName(name: string): Promise<Category> {
    const category = await this.respository.findOne({ name });
    return category;
  }
}

export { CategoriesRepository };
