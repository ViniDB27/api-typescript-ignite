import { Request, Response } from "express";
import { container } from "tsyringe";

import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase);

    const authenticate = await authenticateUserUseCase.execut({
      email,
      password,
    });

    return response.status(201).json(authenticate);
  }
}

export { AuthenticateUserController };
