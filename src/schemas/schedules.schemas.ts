import { z } from "zod";

const dateRegex = /^\d{4}\/\d{2}\/\d{2}$/;
const hourRegex = /^([01][0-9]|2[0-3]):[0-5][0-9]$/;

export const schedulesSchema = z.object({
  date: z.string().regex(dateRegex),
  hour: z.string().regex(hourRegex),
  realEstateId: z.number(),
});
