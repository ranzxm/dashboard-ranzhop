import UpdateProductSubCategoryApp from "@/components/pages/products/sub-category/update/app";
import { getCategories, getSubCategory } from "@/lib/data";
import React from "react";

interface UpdateProductSubCategoryPageProps {
  params: {
    id: string;
  };
}

const getData = async (id: string) => {
  const resCategories = await getCategories();
  const resSubCategory = await getSubCategory(id);

  if (resSubCategory === null) {
    throw new Error("Sub Category Not Found");
  } else {
    return {
      categories: resCategories,
      subCategory: resSubCategory,
    };
  }
};

export default async function UpdateProductSubCategoryPage({
  params,
}: UpdateProductSubCategoryPageProps) {
  const { subCategory, categories } = await getData(params.id);
  return <UpdateProductSubCategoryApp subCategory={subCategory} categories={categories} />;
}
