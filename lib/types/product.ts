export type ProductsType = {
  id: string;
  name: string;
  price: number;
  basePrice: number;
  quantity: number;
  imagePath: string | null;
  description: string | null;
  code: string;
  categoryId: string;
  subCategoryId: string;
  createdAt: Date;
  updatedAt: Date;
};

export type CategoryType = {
  id: string;
  name: string;
  value: string;
  imagePath: string | null;
  description: string | null;
  code: string;
  createdAt: Date;
  updatedAt: Date;
};

export type SubCategoryType = {
  id: string;
  name: string;
  value: string;
  code: string;
  imagePath: string | null;
  description: string | null;
  categoryId: string;
  createdAt: Date;
  updatedAt: Date;
};

export type fetchedSubCategory = {
  categories: CategoryType;
} & SubCategoryType;

export type FetchedProductType = {
  categories: CategoryType;
  subCategories: SubCategoryType;
} & ProductsType;
