import { container } from "tsyringe";

import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository";
import { CategoriesRepository } from "../../modules/cars/repositories/implementations/CategoriesRepository";
import { SpacificationRepository } from "../../modules/cars/repositories/implementations/SpecificationsRepository";
import { ISpacificationRepository } from "../../modules/cars/repositories/ISpecificationsRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";
import { UserRepository } from "../../modules/accounts/repositories/implementations/UsersRepository";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<ISpacificationRepository>(
  "SpacificationRepository",
  SpacificationRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UserRepository
);
