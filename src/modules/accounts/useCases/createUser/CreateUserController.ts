import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreteUserController {
  async handle(request: Request, response: Response) {
    const { name, email, password, driver_license } = request.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);

    await createUserUseCase.execut({
      name,
      email,
      password,
      driver_license,
    });

    return response.status(201).send();
  }
}

export { CreteUserController };
