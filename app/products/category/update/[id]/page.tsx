import UpdateProductCategoryApp from "@/components/pages/products/category/update/app";
import { getCategory } from "@/lib/data";
import React from "react";

interface UpdateProductCategoryPageProps {
  params: {
    id: string;
  };
}

const getData = async (id: string) => {
  const resCategory = await getCategory(id);
  if (resCategory === null) {
    throw new Error("Failed to fetch category");
  } else {
    return {
      category: resCategory,
    };
  }
};

export default async function UpdateProductCategoryPage({
  params,
}: UpdateProductCategoryPageProps) {
  const { category } = await getData(params.id);
  return <UpdateProductCategoryApp category={category} />;
}
