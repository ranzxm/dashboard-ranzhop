"use client";

import { z } from "zod";

export const formProductSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  price: z.coerce.number().min(1, { message: "Price is required" }),
  basePrice: z.coerce.number().min(1, { message: "Base Price is required" }),
  imagePath: z.string().optional(),
  description: z.string().optional(),
  code: z.string().min(1, { message: "Code is required" }),
  quantity: z.coerce.number(),
  categoryId: z.string().min(1, { message: "Category is required" }),
  subCategoryId: z.string().min(1, { message: "Sub Category is required" }),
});
export type FormProductSchema = z.infer<typeof formProductSchema>;

export const formProductCategorySchema = z.object({
  name: z.string().min(1, {
    message: "Category Name is required",
  }),
  code: z.string(),
  imagePath: z.string().optional(),
  description: z.string(),
});
export type FormProductCategorySchema = z.infer<typeof formProductCategorySchema>;

export const formProductSubCategorySchema = z.object({
  name: z.string().min(1, {
    message: "Sub Category Name is required",
  }),
  code: z.string().min(1, { message: "Code is required" }),
  imagePath: z.string(),
  description: z.string(),
  categoryId: z.string().min(1, {
    message: "Category is required",
  }),
});
export type FormProductSubCategorySchema = z.infer<typeof formProductSubCategorySchema>;
