import { inject, injectable } from "tsyringe";

import { ISpacificationRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject("SpacificationRepository")
    private spacificationRepository: ISpacificationRepository
  ) {}

  async execut({ name, description }: IRequest): Promise<void> {
    const specificationArleadyExist =
      await this.spacificationRepository.findByName(name);

    if (specificationArleadyExist) throw new Error("Category already exist!");

    await this.spacificationRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
