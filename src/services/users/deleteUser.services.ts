import {
  TUserRequest,
  TUserReturn,
  TUserUpdateRequest,
} from "../../interfaces/users.interfaces";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { Repository } from "typeorm";
import { userSchemaReturn } from "../../schemas/users.schemas";
import { AppError } from "../../errror";

export const deleteUserServices = async (id: number) => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  const user = (await userRepo.findOneBy({
    id,
  })) as User;

  if (user?.deletedAt) {
    throw new AppError("Praia", 404);
  }

  userRepo.softRemove(user);
};
