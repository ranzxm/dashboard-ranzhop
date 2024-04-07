import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import FormCreateProduct from "./form-create-product";
import { CategoryType, SubCategoryType } from "@/lib/types/product";

interface CreateProductAppProps {
  categories: ({
    subCategories: SubCategoryType[];
  } & CategoryType)[];
}

export default function CreateProductApp({ categories }: CreateProductAppProps) {
  const data = {
    categories,
  };
  return (
    <div id="createproductapp" className="w-full h-full">
      <div className="container mx-auto p-4 space-y-4 w-full h-full">
        <div className="flex items-center gap-4">
          <Link href={"/products/"}>
            <Button variant={"outline"} size={"icon"}>
              <ArrowLeft size={20} />
            </Button>
          </Link>
          <h1>Create Product</h1>
        </div>
        <FormCreateProduct data={data} />
      </div>
    </div>
  );
}
