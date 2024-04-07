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
import { formProductCategorySchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { createProductCategory } from "@/lib/actions";
import { Textarea } from "@/components/ui/textarea";

export default function FormCreateProductCategory() {
  const form = useForm({
    resolver: zodResolver(formProductCategorySchema),
    defaultValues: {
      name: "",
      code: "",
      imagePath: "",
      description: "",
    },
  });

  const onSubmit = async (data: any) => {
    await createProductCategory(data);
  };
  return (
    <section id="formcreateproductcategory">
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
