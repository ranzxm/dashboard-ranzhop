import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import { CategoryType, ProductsType, SubCategoryType } from "@/lib/types/product";
import FormUpdateProduct from "./form-update-product";

interface UpdateProductAppProps {
  product:
    | ({
        categories: CategoryType;
        subCategories: SubCategoryType;
      } & ProductsType)
    | null;
  categories: ({
    subCategories: SubCategoryType[];
  } & CategoryType)[];
}

export default function UpdateProductApp({ categories, product }: UpdateProductAppProps) {
  const data = {
    product,
    categories,
  };
  return (
    <div id="createproductapp" className="w-full h-full">
      <div className="container mx-auto p-4 space-y-4">
        <div className="flex items-center gap-4">
          <Link href={"/products/"}>
            <Button variant={"outline"} size={"icon"}>
              <ArrowLeft size={20} />
            </Button>
          </Link>
          <h1>Update Product</h1>
        </div>
        <FormUpdateProduct data={data} />
      </div>
    </div>
  );
}
