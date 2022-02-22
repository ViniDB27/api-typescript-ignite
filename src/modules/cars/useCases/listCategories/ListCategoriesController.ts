import { Request, Response } from "express";

import { ListCatergoriesUseCase } from "./ListCategoriesUseCase";

class ListCatergoriesContoller {
  constructor(private listCatergoriesUseCase: ListCatergoriesUseCase) {}

  handle(request: Request, response: Response): Response {
    return response.json(this.listCatergoriesUseCase.exucute());
  }
}

export { ListCatergoriesContoller };
