import type React from "react";
import { useEffect } from "react";
import type { UseFormReturn } from "react-hook-form";
import { useForm } from "react-hook-form";
import type { VectorPairFormValues } from "src/shared";

import { zodResolver } from "@hookform/resolvers/zod";

import { useVectorPairActions, useVectorPairPlacement } from "src/entities";

import { VectorPairFormSchema } from "src/shared";
import { safeParseNumber } from "src/shared/lib/parse";

type UseVectorPairFormType = UseFormReturn<VectorPairFormValues> & {
  onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
};

export const useVectorPairForm = (): UseVectorPairFormType => {
  const vectorPlacement = useVectorPairPlacement();
  const { setVectorPlacement } = useVectorPairActions();

  const formMethods = useForm<VectorPairFormValues>({
    resolver: zodResolver(VectorPairFormSchema)
  });

  useEffect(() => {
    const v1 = vectorPlacement[0] || {};
    const v2 = vectorPlacement[1] || {};

    formMethods.reset({
      x1Start: v1.xStart ?? 0,
      x1End: v1.xEnd ?? 0,
      y1Start: v1.yStart ?? 0,
      y1End: v1.yEnd ?? 0,
      x2Start: v2.xStart ?? 0,
      x2End: v2.xEnd ?? 0,
      y2Start: v2.yStart ?? 0,
      y2End: v2.yEnd ?? 0
    });
  }, [vectorPlacement, formMethods.reset, formMethods]);

  const onSubmit = formMethods.handleSubmit((data) => {
    const parsed = Object.fromEntries(
      Object.entries(data).map(([k, v]) => [k, safeParseNumber(v)])
    ) as VectorPairFormValues;

    setVectorPlacement(0, {
      xStart: parsed.x1Start,
      xEnd: parsed.x1End,
      yStart: parsed.y1Start,
      yEnd: parsed.y1End
    });
    setVectorPlacement(1, {
      xStart: parsed.x2Start,
      xEnd: parsed.x2End,
      yStart: parsed.y2Start,
      yEnd: parsed.y2End
    });
  });

  return { ...formMethods, onSubmit };
};
