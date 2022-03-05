import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCatergoriesUseCase } from "./ListCategoriesUseCase";

class ListCatergoriesContoller {
  handle(request: Request, response: Response): Response {
    const listCatergoriesUseCase = container.resolve(ListCatergoriesUseCase);

    return response.json(listCatergoriesUseCase.exucute());
  }
}

export { ListCatergoriesContoller };
