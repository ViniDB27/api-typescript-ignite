import { Specification } from "../../model/Specification";
import {
  ISpacificationRepository,
  ICreateSpacificationDTO,
} from "../ISpecificationsRepository";

class SpacificationRepository implements ISpacificationRepository {
  private specifications: Specification[];

  private static INSTANCE: SpacificationRepository;

  public static getInstance(): SpacificationRepository {
    if (!SpacificationRepository.INSTANCE) {
      SpacificationRepository.INSTANCE = new SpacificationRepository();
    }

    return SpacificationRepository.INSTANCE;
  }

  private constructor() {
    this.specifications = [];
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find(
      (spec) => spec.name === name
    );
    return specification;
  }

  create({ name, description }: ICreateSpacificationDTO): void {
    const specification = new Specification();
    Object.assign(specification, {
      name,
      description,
    });

    this.specifications.push(specification);
  }
}

export { SpacificationRepository };
