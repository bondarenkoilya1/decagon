import { z } from "zod";

export const VectorFormSchema = z.object({
  xStart: z.number(),
  xEnd: z.number(),
  yStart: z.number(),
  yEnd: z.number()
});

// TODO: Bad way to do like that
export const VectorPairFormSchema = z.object({
  x1Start: z.number(),
  x1End: z.number(),
  y1Start: z.number(),
  y1End: z.number(),
  x2Start: z.number(),
  x2End: z.number(),
  y2Start: z.number(),
  y2End: z.number()
});

export type VectorFormValues = z.infer<typeof VectorFormSchema>;
export type VectorPairFormValues = z.infer<typeof VectorPairFormSchema>;
