import { Specification } from "../entities/Specification";

interface ICreateSpacificationDTO {
  name: string;
  description: string;
}

interface ISpacificationRepository {
  create(data: ICreateSpacificationDTO): Promise<void>;
  findByName(name: string): Promise<Specification>;
}

export { ISpacificationRepository, ICreateSpacificationDTO };
