import { Router } from "express";
import { createUserControllers } from "../controllers/users.controllers";
import { validatedBodyMiddleware } from "../middlewares/validatedBody.middlewares";
import { userSchemaRequest } from "../schemas/users.schemas";
import { ensureEmailNotExists } from "../middlewares/ensureEmailNotExists.middlewares";

export const userRoute: Router = Router();

userRoute.post(
  "",
  validatedBodyMiddleware(userSchemaRequest),
  ensureEmailNotExists,
  createUserControllers
);
