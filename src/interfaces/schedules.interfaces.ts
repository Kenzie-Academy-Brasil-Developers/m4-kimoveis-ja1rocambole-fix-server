import { z } from "zod";
import { schedulesSchema } from "../schemas/schedules.schemas";

export type TSchedulesRequest = z.infer<typeof schedulesSchema>;
