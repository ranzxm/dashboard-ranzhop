import UpdateProductApp from "@/components/pages/products/update/app";
import { getCategories, getProduct } from "@/lib/data";
import React from "react";
import { z } from "zod";

interface UpdateProductPageProps {
  params: {
    id: string;
  };
}

const getData = async (id: string) => {
  const resProduct = await getProduct(id);
  const resCategories = await getCategories();

  return {
    product: resProduct,
    categories: resCategories,
  };
};

export default async function UpdateProductPage({ params }: UpdateProductPageProps) {
  const { product, categories } = await getData(params.id);
  return <UpdateProductApp product={product} categories={categories} />;
}
