import { ISpacificationRepository } from "../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private spacificationRepository: ISpacificationRepository) {}

  execut({ name, description }: IRequest): void {
    const specificationArleadyExist = this.spacificationRepository.findByName(name);

    if (specificationArleadyExist) throw new Error("Category already exist!");

    this.spacificationRepository.create({ name, description });
  }
}


export { CreateSpecificationService };
