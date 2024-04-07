import CreateProductApp from "@/components/pages/products/create/app";
import { getCategories, getSubCategories } from "@/lib/data";
import React from "react";

const getData = async () => {
  const resCategories = await getCategories();
  return {
    categories: resCategories,
  };
};

export default async function CreateProductPage() {
  const { categories } = await getData();
  return <CreateProductApp categories={categories} />;
}
