import { z } from "zod";
import {
  realEstateSchemaRequest,
  realEstateSchemaReturn,
  realEstateWithOutCategorySchemaArrayReturn,
  realEstateWithOutCategorySchemaReturn,
} from "../schemas/realEstate.schemas";

export type TRealEstateReturn = z.infer<typeof realEstateSchemaReturn>;

export type TRealEstateWithOutcategoryReturn = z.infer<
  typeof realEstateWithOutCategorySchemaReturn
>;

export type TRealEstateRequest = z.infer<typeof realEstateSchemaRequest>;
