import ProductSubCategoryApp from "@/components/pages/products/sub-category/app-sub-category";
import { getSubCategories } from "@/lib/data";
import React from "react";

const getData = async () => {
  const resSubCategories = await getSubCategories();
  return {
    subCategories: resSubCategories,
  };
};

export default async function ProductSubCategoryPage() {
  const { subCategories } = await getData();
  return <ProductSubCategoryApp subCategories={subCategories} />;
}
