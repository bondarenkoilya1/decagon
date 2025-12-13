import { z } from "zod";

export const VectorRotateSchema = z.object({
  degrees: z.number()
});

export type VectorRotateValues = z.infer<typeof VectorRotateSchema>;
