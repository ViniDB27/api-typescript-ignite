import { getRepository, Repository } from "typeorm";

import { Specification } from "../../entities/Specification";
import {
  ISpacificationRepository,
  ICreateSpacificationDTO,
} from "../ISpecificationsRepository";

class SpacificationRepository implements ISpacificationRepository {
  private repository: Repository<Specification>;

  private constructor() {
    this.repository = getRepository(Specification);
  }

  async create({ name, description }: ICreateSpacificationDTO): Promise<void> {
    const spacification = await this.repository.create({
      name,
      description,
    });

    await this.repository.save(spacification);
  }

  async findByName(name: string): Promise<Specification> {
    const specification = this.repository.findOne({ name });
    return specification;
  }
}

export { SpacificationRepository };
