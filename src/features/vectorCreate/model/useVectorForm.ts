"use client";
import type React from "react";
import { useEffect } from "react";
import type { UseFormReturn } from "react-hook-form";
import { type SubmitHandler, useForm } from "react-hook-form";
import type { VectorFormValues } from "src/entities";

import { zodResolver } from "@hookform/resolvers/zod";

import { useVectorActions, useVectorPlacement, VectorFormSchema } from "src/entities";

import { safeParseNumber } from "src/shared/lib/parse";

type UseVectorFormType = UseFormReturn<VectorFormValues> & {
  onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
};

export const useVectorForm = (): UseVectorFormType => {
  const vectorPlacement = useVectorPlacement();
  const formMethods = useForm<VectorFormValues>({
    resolver: zodResolver(VectorFormSchema),
    defaultValues: vectorPlacement
  });
  const { reset, handleSubmit } = formMethods;
  const { setVectorPlacement } = useVectorActions();

  // Updates form values with the current vector coordinates
  useEffect(() => reset(vectorPlacement), [reset, vectorPlacement]);

  const createVector: SubmitHandler<VectorFormValues> = (inputValues) => {
    const sanitizedValues = Object.fromEntries(
      Object.entries(inputValues).map(([key, value]) => [key, safeParseNumber(value)])
    ) as VectorFormValues;

    setVectorPlacement(sanitizedValues);
  };

  return { ...formMethods, onSubmit: handleSubmit(createVector) };
};
