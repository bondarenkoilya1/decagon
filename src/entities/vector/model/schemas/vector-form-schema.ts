import { z } from "zod";

export const VectorFormSchema = z.object({
  xStart: z.number(),
  xEnd: z.number(),
  yStart: z.number(),
  yEnd: z.number()
});

export const VectorPairFormSchema = z.object({
  vectors: z.tuple([VectorFormSchema, VectorFormSchema])
});

export type VectorFormValues = z.infer<typeof VectorFormSchema>;
export type VectorPairFormValues = z.infer<typeof VectorPairFormSchema>;
