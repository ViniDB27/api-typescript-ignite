import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  token: string;
  user: {
    name: string;
    email: string;
    id: string;
    isAdmin: boolean;
  };
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("users")
    private usersRepository: IUsersRepository
  ) {}

  async execut({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) throw new Error("Email or password incorrect");

    const passwordCompare = await compare(password, user.password);

    if (!passwordCompare) throw new Error("Email or password incorrect");

    const token = sign(
      {
        name: user.name,
        email: user.email,
        id: user.id,
        isAdmin: user.isAdmin,
      },
      "secretOrPrivateKeyExample",
      {
        expiresIn: "1d",
        subject: user.id,
      }
    );

    return {
      user,
      token,
    };
  }
}

export { AuthenticateUserUseCase };
