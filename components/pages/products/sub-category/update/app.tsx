import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import FormUpdateProductSubCategory from "./form-update-sub-category";
import { CategoryType, SubCategoryType } from "@/lib/types/product";

interface UpdateProductSubCategoryAppProps {
  subCategory: SubCategoryType;
  categories: CategoryType[];
}

export default function UpdateProductSubCategoryApp({
  subCategory,
  categories,
}: UpdateProductSubCategoryAppProps) {
  return (
    <div id="updateproductsubcategoryapp" className="w-full h-full">
      <div className="container mx-auto p-4 space-y-4">
        <div className="flex items-center gap-4">
          <Link href={"/products/sub-category"}>
            <Button variant="outline" size="icon">
              <ArrowLeft size={20} />
            </Button>
          </Link>
          <h1>Update Product Sub Category</h1>
        </div>
        <FormUpdateProductSubCategory categories={categories} subCategory={subCategory} />
      </div>
    </div>
  );
}
