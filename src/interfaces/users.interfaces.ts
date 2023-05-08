import { z } from "zod";
import {
  userSchema,
  userSchemaRequest,
  userSchemaReturn,
} from "../schemas/users.schemas";

export type TUser = z.infer<typeof userSchema>;
export type TUserRequest = z.infer<typeof userSchemaRequest>;
export type TUserReturn = z.infer<typeof userSchemaReturn>;
