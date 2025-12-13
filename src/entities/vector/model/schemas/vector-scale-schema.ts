import { z } from "zod";

export const VectorScaleSchema = z.object({
  xMultiplier: z.number,
  yMultiplier: z.number
});

export type VectorScaleValues = z.infer<typeof VectorScaleSchema>;
