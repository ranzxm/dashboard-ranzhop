import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import FormCreateProductCategory from "./form-create-sub-category";
import { CategoryType } from "@/lib/types/product";

interface CreateProductSubCategoryAppProps {
  data: {
    categories: CategoryType[];
  };
}

export default function CreateProductSubCategoryApp({ data }: CreateProductSubCategoryAppProps) {
  const categories = data.categories;
  return (
    <div id="createproductcategoryapp" className="w-full h-full">
      <div className="container mx-auto p-4 space-y-4">
        <div className="flex items-center gap-4">
          <Link href={"/products/"}>
            <Button variant={"outline"} size={"icon"}>
              <ArrowLeft size={20} />
            </Button>
          </Link>
          <h1>Create Product Sub Category</h1>
        </div>
        <FormCreateProductCategory categories={categories} />
      </div>
    </div>
  );
}
