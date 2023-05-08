import { Request, Response } from "express";
import { TUserRequest, TUserReturn } from "../interfaces/users.interfaces";
import { createUserServices } from "../services/users/createUser.services";

export const createUserControllers = async (req: Request, res: Response) => {
  const userReq: TUserRequest = req.body;

  const userReturn: TUserReturn = await createUserServices(userReq);

  return res.status(201).json(userReturn);
};
