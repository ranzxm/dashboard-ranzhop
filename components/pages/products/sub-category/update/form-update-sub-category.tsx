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
import { formProductSubCategorySchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createProductSubCategory } from "@/lib/actions";
import { CategoryType, SubCategoryType } from "@/lib/types/product";
import { Textarea } from "@/components/ui/textarea";

interface FormUpdateProductSubCategoryProps {
  categories: CategoryType[];
  subCategory: SubCategoryType;
}

export default function FormUpdateProductSubCategory({
  categories,
  subCategory,
}: FormUpdateProductSubCategoryProps) {
  const imagePath = subCategory.imagePath as string;
  const description = subCategory.description as string;

  const form = useForm({
    resolver: zodResolver(formProductSubCategorySchema),
    defaultValues: {
      name: subCategory.name,
      code: subCategory.code,
      imagePath,
      categoryId: subCategory.categoryId,
      description,
    },
  });

  const onSubmit = async (value: any) => {
    await createProductSubCategory(value);
  };
  return (
    <section id="formcreateproductsubcategory">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid md:grid-cols-5 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="col-span-3 md:col-span-4">
                  <FormLabel>
                    Sub Category Name <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Sub Category Name" autoComplete="off" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem className="col-span-3 md:col-span-1">
                  <FormLabel>
                    Sub Category Code <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Code" autoComplete="off" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="imagePath"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sub Category Pictyre</FormLabel>
                <FormControl>
                  <Input type="file" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="categoryId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Category <span className="text-red-500">*</span>
                </FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem value={category.id} key={category.id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sub Category Pictyre</FormLabel>
                <FormControl>
                  <Textarea placeholder="Sub category description" {...field} />
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
