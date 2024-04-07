import CreateProductCategoryApp from "@/components/pages/products/category/app";
import { getCategories } from "@/lib/data";
import React from "react";

const getData = async () => {
  const resCategories = await getCategories();
  return {
    categories: resCategories,
  };
};

export default async function ProductCategoryPage() {
  const { categories } = await getData();
  return <CreateProductCategoryApp categories={categories} />;
}
