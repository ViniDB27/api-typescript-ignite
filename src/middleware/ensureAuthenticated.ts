import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (authHeader) throw new Error("oken missing");

  const token = authHeader.split(" ")[1];

  try {
    const decoded = verify(token, "secretOrPrivateKeyExample");
  } catch {
    throw new Error("Invalid Token");
  }
}
