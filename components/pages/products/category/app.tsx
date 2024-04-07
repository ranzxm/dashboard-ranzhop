import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import { DataTable } from "./table/data-table-category";
import { columns } from "./table/columns";
import { CategoryType, SubCategoryType } from "@/lib/types/product";

interface CreateProductCategoryAppProps {
  categories: ({
    subCategories: SubCategoryType[];
  } & CategoryType)[];
}

export default function CreateProductCategoryApp({ categories }: CreateProductCategoryAppProps) {
  return (
    <div id="createproductcategoryapp">
      <div className="container mx-auto p-4 space-y-4 w-full h-full relative">
        <div className="flex items-center gap-4">
          <Link href={"/products"}>
            <Button variant={"outline"} size={"icon"}>
              <ArrowLeft size={20} />
            </Button>
          </Link>
          <h1>Product Categories</h1>
        </div>
        <DataTable columns={columns} data={categories} />
      </div>
    </div>
  );
}
