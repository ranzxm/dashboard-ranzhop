import { Button } from "@/components/ui/button";
import { CategoryType } from "@/lib/types/product";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import FormUpdateProductCategory from "./form-update-category";

interface UpdateProductCategoryAppProps {
  category: CategoryType;
}

export default function UpdateProductCategoryApp({ category }: UpdateProductCategoryAppProps) {
  return (
    <div id="updateproductcategoryapp" className="w-full h-full">
      <div className="container mx-auto p-4 space-y-4">
        <div className="flex items-center gap-4">
          <Link href={"/products/category"}>
            <Button variant={"outline"} size={"icon"}>
              <ArrowLeft size={20} />
            </Button>
          </Link>
          <h1>Update Product Category</h1>
        </div>
        <FormUpdateProductCategory category={category} />
      </div>
    </div>
  );
}
