import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities";
import { Repository } from "typeorm";
import { AppError } from "../errror";

export const ensureUserIsAdminMiddlewares = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userIsAdmin: boolean = res.locals.admin;

  if (!userIsAdmin) {
    throw new AppError("Insufficient permission", 403);
  }

  next();
};
