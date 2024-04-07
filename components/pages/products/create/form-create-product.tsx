"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormProductSchema, formProductSchema } from "@/lib/schema";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { createProduct } from "@/lib/actions";
import { CategoryType, SubCategoryType } from "@/lib/types/product";
import { Textarea } from "@/components/ui/textarea";

interface FormCreateProductProps {
  data: {
    categories: ({
      subCategories: SubCategoryType[];
    } & CategoryType)[];
  };
}

export default function FormCreateProduct({ data }: FormCreateProductProps) {
  const [subCategoryIndex, setSubCategoryIndex] = useState<string | undefined>(undefined);

  const form = useForm<FormProductSchema>({
    resolver: zodResolver(formProductSchema),
    defaultValues: {
      name: "",
      code: "",
      imagePath: "",
      description: "",
      price: undefined,
      basePrice: undefined,
      quantity: undefined,
      categoryId: "",
      subCategoryId: "",
    },
  });

  const handleOnSubmit = async (data: FormProductSchema) => {
    await createProduct(data);
  };

  return (
    <section id="formcreateproduct">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleOnSubmit)} className="space-y-4 pb-4">
          <div className="grid grid-cols-5 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="col-span-3 md:col-span-4">
                  <FormLabel>
                    Product Name <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Voucher Axis" autoComplete="off" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem className="col-span-2 md:col-span-1">
                  <FormLabel>
                    Product Code <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="2G3H" autoComplete="off" {...field} />
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
                <FormLabel>Product Image</FormLabel>
                <FormControl>
                  <Input type="file" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Price <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Rp. 15.000" type="number" min={0} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="basePrice"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Base Price <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Rp. 12.000" type="number" min={0} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="quantity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Stock <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="50 Qty." type="number" min={0} {...field} />
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
                <Select
                  onValueChange={(e) => {
                    setSubCategoryIndex(e);
                    field.onChange(e);
                  }}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {data.categories.map((category) => (
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
            name="subCategoryId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Sub. Category <span className="text-red-500">*</span>
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  disabled={!subCategoryIndex}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Sub Category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {data.categories
                      .find((category) => category.id === subCategoryIndex)
                      ?.subCategories.map((subCategory) => (
                        <SelectItem value={subCategory.id} key={subCategory.id}>
                          {subCategory.name} - ({subCategory.code})
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
                <FormLabel>Product Descriptions</FormLabel>
                <FormControl>
                  <Textarea placeholder="Product Descriptions" {...field} />
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
