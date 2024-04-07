"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormProductCategorySchema, formProductCategorySchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { CategoryType } from "@/lib/types/product";
import { updateProductCategory } from "@/lib/actions";

interface FormUpdateProductCategoryProps {
  category: CategoryType;
}
export default function FormUpdateProductCategory({ category }: FormUpdateProductCategoryProps) {
  const description = category.description as string;

  const form = useForm({
    resolver: zodResolver(formProductCategorySchema),
    defaultValues: {
      name: category.name,
      code: category.code,
      imagePath: "",
      description,
    },
  });

  const onSubmit = async (data: FormProductCategorySchema) => {
    await updateProductCategory(category.id, data);
  };
  return (
    <section id="formupdateproductcategory">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Category name <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Top Up Game" autoComplete="off" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="imagePath"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category Image</FormLabel>
                <FormControl>
                  <Input type="file" autoComplete="off" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category Descriptions</FormLabel>
                <FormControl>
                  <Textarea placeholder="Category Description" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </section>
  );
}
