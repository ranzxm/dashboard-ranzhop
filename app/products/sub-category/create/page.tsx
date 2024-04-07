import CreateProductSubCategoryApp from "@/components/pages/products/sub-category/create/app";
import { getCategories } from "@/lib/data";

const getData = async () => {
  const resCategories = await getCategories();
  return {
    categories: resCategories,
  };
};

export default async function CreateProductSubCategoryPage() {
  const { categories } = await getData();
  const data = {
    categories,
  };
  return <CreateProductSubCategoryApp data={data} />;
}
