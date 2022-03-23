import { Router } from "express";

import { CreteUserController } from "../modules/accounts/useCases/createUser/CreateUserController";

const usersRouter = Router();

const createUserController = new CreteUserController();

usersRouter.post("/", createUserController.handle);

export { usersRouter };
