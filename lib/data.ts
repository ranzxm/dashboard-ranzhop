import { prisma } from "@/lib/prisma";

export async function getUsers() {
  try {
    const res = await prisma.users.findMany();
    return res;
  } catch (error) {
    throw new Error("Failed to fetch data!");
  }
}

export async function getProducts() {
  try {
    const res = await prisma.products.findMany({
      include: {
        categories: true,
        subCategories: true,
      },
    });
    return res;
  } catch (error) {
    throw new Error("Failed to fetch data!");
  }
}

export async function getProduct(idProduct: string) {
  try {
    const res = await prisma.products.findUnique({
      where: {
        id: idProduct,
      },
      include: {
        categories: true,
        subCategories: true,
      },
    });
    if (res === null) {
      throw new Error();
    }
    return res;
  } catch (error) {
    throw new Error("Failed to fetch product [id is incorrect or Network unstable]");
  }
}

export async function getCategories() {
  try {
    const res = await prisma.categories.findMany({
      include: {
        subCategories: true,
      },
    });
    return res;
  } catch (error) {
    throw new Error("Failed to fetch data!");
  }
}

export async function getCategory(idCategory: string) {
  try {
    const res = await prisma.categories.findUnique({
      where: {
        id: idCategory,
      },
    });
    return res;
  } catch (error) {
    throw new Error("Failed to get Category");
  }
}

export async function getSubCategories() {
  try {
    const res = await prisma.subCategories.findMany({
      include: {
        categories: true,
      },
    });
    return res;
  } catch (error) {
    throw new Error("Failed to fetch data!");
  }
}

export async function getSubCategory(idSubCategory: string) {
  try {
    const res = await prisma.subCategories.findUnique({
      where: {
        id: idSubCategory,
      },
    });
    return res;
  } catch (error) {
    throw new Error("Failed to get sub category");
  }
}
