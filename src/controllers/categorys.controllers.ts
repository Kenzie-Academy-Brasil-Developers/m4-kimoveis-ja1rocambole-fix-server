import { Request, Response } from "express";
import { TCategoryRequest } from "../interfaces/categorys.interfaces";
import { createCategory } from "../services/categories/createCategory.services";

export const createCategoryControllers = async (
  req: Request,
  res: Response
) => {
  const categoryReq: TCategoryRequest = req.body;

  const categoryReturn = await createCategory(categoryReq);

  return res.status(201).json(categoryReturn);
};
