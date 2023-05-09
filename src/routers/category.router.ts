import { Router } from "express";
import { createCategoryControllers } from "../controllers/categorys.controllers";
import { validatedBodyMiddleware } from "../middlewares/validatedBody.middlewares";
import { categorySchemaRequest } from "../schemas/categorys.schema";
import { validatedTokenMiddlewares } from "../middlewares/validatedToken.middlewares";
import { ensureUserIsAdminMiddlewares } from "../middlewares/ensureUserIsAdmin.middlewares";

export const categoryRouter: Router = Router();

categoryRouter.post(
  "",
  validatedBodyMiddleware(categorySchemaRequest),
  validatedTokenMiddlewares,
  ensureUserIsAdminMiddlewares,
  createCategoryControllers
);
