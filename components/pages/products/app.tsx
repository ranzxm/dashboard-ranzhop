import { CategoryType, ProductsType, SubCategoryType } from "@/lib/types/product";
import React from "react";
import { DataTable } from "./table/data-table";
import { columns } from "./table/columns";

type ProductAppProps = {
  data: {
    products: ({
      categories: CategoryType;
      subCategories: SubCategoryType;
    } & ProductsType)[];
    categories: CategoryType[];
    subCategories: SubCategoryType[];
  };
};

export default function ProductApp({ data }: ProductAppProps) {
  const { products, categories, subCategories } = data;

  const facetedData = {
    categories,
    subCategories,
  };

  return (
    <div id="productapp" className="w-full h-full">
      <div id="title" className="bg-muted py-2 md:hidden">
        <div className="px-4 container mx-auto opacity-60">
          <span># Products</span>
        </div>
      </div>
      <div className="container mx-auto p-4 relative h-full">
        <DataTable columns={columns} data={products} facetedData={facetedData} />
      </div>
    </div>
  );
}
