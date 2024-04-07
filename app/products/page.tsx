import ProductApp from "@/components/pages/products/app";
import { getCategories, getProducts, getSubCategories } from "@/lib/data";
import React from "react";

async function getData() {
  const resProducts = await getProducts();
  const resCategories = await getCategories();
  const resSubCategories = await getSubCategories();

  return {
    products: resProducts,
    categories: resCategories,
    subCategories: resSubCategories,
  };
}

export default async function ProductsPage() {
  const { products, categories, subCategories } = await getData();

  const data = {
    products,
    categories,
    subCategories,
  };

  return <ProductApp data={data} />;
}
