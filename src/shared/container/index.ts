import { container } from "tsyringe";

import { UserRepository } from "../../modules/accounts/repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";
import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository";
import { CategoriesRepository } from "../../modules/cars/repositories/implementations/CategoriesRepository";
import { SpacificationRepository } from "../../modules/cars/repositories/implementations/SpecificationsRepository";
import { ISpacificationRepository } from "../../modules/cars/repositories/ISpecificationsRepository";

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
