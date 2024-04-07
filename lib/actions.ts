"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  FormProductCategorySchema,
  FormProductSchema,
  FormProductSubCategorySchema,
} from "./schema";

// PRODUCT
export async function createProduct(data: FormProductSchema) {
  try {
    const subCategory = await prisma.subCategories.findUnique({
      where: {
        id: data.subCategoryId,
      },
    });
    await prisma.products.create({
      data: {
        name: data.name,
        price: data.price,
        basePrice: data.basePrice,
        code: subCategory?.code + "-" + data.code,
        quantity: data.quantity,
        categoryId: data.categoryId,
        subCategoryId: data.subCategoryId,
        imagePath: data.imagePath,
        description: data.description,
      },
    });
  } catch (error) {
    throw new Error("Failed to create product");
  }

  revalidatePath("/products");
  redirect("/products");
}

export async function updateProduct(id: string | undefined, data: FormProductSchema) {
  try {
    const subCategory = await prisma.subCategories.findUnique({
      where: {
        id: data.subCategoryId,
      },
    });
    await prisma.products.update({
      where: {
        id,
      },
      data: {
        name: data.name,
        price: data.price,
        basePrice: data.basePrice,
        code: subCategory?.code + "-" + data.code,
        quantity: data.quantity,
        categoryId: data.categoryId,
        subCategoryId: data.subCategoryId,
        imagePath: data.imagePath,
        description: data.description,
      },
    });
  } catch (error) {
    throw new Error("Failed to update product");
  }
  revalidatePath("/products");
  redirect("/products");
}

export async function deleteProduct(idProducts: string[]) {
  try {
    await prisma.products.deleteMany({
      where: {
        id: {
          in: idProducts,
        },
      },
    });
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete product");
  }
  revalidatePath("/products");
  redirect("/products");
}

// CATEGORY
export async function createProductCategory(data: FormProductCategorySchema) {
  const generateCode = data.name.toUpperCase().replace(/\s/g, "");
  try {
    await prisma.categories.create({
      data: {
        name: data.name,
        value: data.name.toLowerCase(),
        code: generateCode,
        description: data.description,
        imagePath: data.imagePath,
      },
    });
  } catch (error) {
    throw new Error("Failed to create category");
  }
  revalidatePath("/products/category");
  redirect("/products/category");
}

export async function updateProductCategory(
  id: string | undefined,
  data: FormProductCategorySchema
) {
  try {
    await prisma.categories.update({
      where: {
        id,
      },
      data: {
        ...data,
      },
    });
  } catch (error) {
    throw new Error("Failed to update category");
  }
  revalidatePath("/products/category");
  redirect("/products/category");
}

export async function deleteProductCategory(idCategories: string[]) {
  try {
    const products = await prisma.products.findMany({
      where: {
        categoryId: {
          in: idCategories,
        },
      },
    });
    products.length > 0 &&
      (await prisma.products.deleteMany({
        where: {
          categoryId: {
            in: idCategories,
          },
        },
      }));

    const subCategories = await prisma.subCategories.findMany({
      where: {
        categoryId: {
          in: idCategories,
        },
      },
    });
    subCategories.length > 0 &&
      (await prisma.subCategories.deleteMany({
        where: {
          categoryId: {
            in: idCategories,
          },
        },
      }));

    await prisma.categories.deleteMany({
      where: {
        id: {
          in: idCategories,
        },
      },
    });
  } catch (error) {
    throw new Error("Failed to delete category");
  }
  revalidatePath("/products/category");
  redirect("/products/category");
}

// SUB CATEGORY
export async function createProductSubCategory(data: FormProductSubCategorySchema) {
  try {
    await prisma.subCategories.create({
      data: {
        name: data.name,
        value: data.name.toLowerCase(),
        categoryId: data.categoryId,
        code: data.code,
      },
    });
  } catch (error) {
    throw new Error("Failed to create sub category");
  }
  revalidatePath("/products/sub-category");
  redirect("/products/sub-category");
}

export async function deleteProductSubCategory(idSubCategory: string[]) {
  try {
    // delete all product
    await prisma.products.deleteMany({
      where: {
        id: {
          in: idSubCategory,
        },
      },
    });

    // delete sub category
    await prisma.subCategories.deleteMany({
      where: {
        id: {
          in: idSubCategory,
        },
      },
    });
  } catch (error) {
    throw new Error("Failed to delete sub category");
  }
  revalidatePath("/products/sub-category");
  redirect("/products/sub-category");
}
