import { Specification } from "../entities/Specification";

interface ICreateSpacificationDTO {
  name: string;
  description: string;
}

interface ISpacificationRepository {
  create(data: ICreateSpacificationDTO): void;
  findByName(name: string): Specification;
}

export { ISpacificationRepository, ICreateSpacificationDTO };
