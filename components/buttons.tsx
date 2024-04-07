"use client";

import { Button } from "@/components/ui/button";
import { Plus, Trash } from "lucide-react";
import React from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import Link from "next/link";
import { Table } from "@tanstack/react-table";
import { CategoryType, ProductsType, SubCategoryType } from "@/lib/types/product";
import { deleteProduct, deleteProductCategory, deleteProductSubCategory } from "@/lib/actions";

export function ButtonCreateProduct() {
  return (
    <div className="fixed bottom-4 right-4 md:right-8 z-20">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href={"/products/create"}>
              <Button variant={"outline"} className="w-12 h-12 rounded-full">
                <Plus />
              </Button>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Create new Product</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

export function ButtonCreateCategoryProduct() {
  return (
    <div className="fixed bottom-4 right-4  z-20">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href={"/products/category/create"}>
              <Button variant={"outline"} className="w-12 h-12 rounded-full">
                <Plus />
              </Button>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Create new Category Product</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

export function ButtonCreateSubCategoryProduct() {
  return (
    <div className="fixed bottom-4 right-4  z-20">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href={"/products/sub-category/create"}>
              <Button variant={"outline"} className="w-12 h-12 rounded-full">
                <Plus />
              </Button>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Create new Sub Category Product</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

export function ButtonDeleteProduct<TData>({ table }: { table: Table<TData> }) {
  const deleteProductWithId = () => {
    const idProducts = table.getSelectedRowModel().rows.map((row) => {
      const product = row.original as ProductsType;
      return product.id;
    });
    deleteProduct.bind(null, idProducts)();
    table.toggleAllRowsSelected(false);
  };
  return (
    <div className="fixed bottom-4 right-4 md:right-8 z-20">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <form action={deleteProductWithId}>
              <Button
                variant={"destructive"}
                className="group/button w-12 h-12 rounded-full"
                type="submit"
              >
                <Trash className="group-hover/button:scale-110 duration-150" />
              </Button>
            </form>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Delete Product</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

export function ButtonDeleteProductCategory<TData>({ table }: { table: Table<TData> }) {
  const deleteProductCategoryWithId = () => {
    const idCategories = table.getSelectedRowModel().rows.map((row) => {
      const categories = row.original as CategoryType;
      return categories.id;
    });
    deleteProductCategory.bind(null, idCategories)();
    table.toggleAllRowsSelected(false);
  };
  return (
    <div className="fixed bottom-4 right-4 z-20">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <form action={deleteProductCategoryWithId}>
              <Button
                variant={"destructive"}
                className="group/button w-12 h-12 rounded-full"
                type="submit"
              >
                <Trash className="group-hover/button:scale-110 duration-150" />
              </Button>
            </form>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Delete Product</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

export function ButtonDeleteProductSubCategory<TData>({ table }: { table: Table<TData> }) {
  const deleteProductSubCategoryWithId = () => {
    const idSubCategoryProduct = table.getSelectedRowModel().rows.map((row) => {
      const subCategories = row.original as SubCategoryType;
      return subCategories.id;
    });
    deleteProductSubCategory.bind(null, idSubCategoryProduct)();
    table.toggleAllRowsSelected(false);
  };
  return (
    <div className="fixed bottom-4 right-4 z-20">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <form action={deleteProductSubCategoryWithId}>
              <Button
                variant={"destructive"}
                className="group/button w-12 h-12 rounded-full"
                type="submit"
              >
                <Trash className="group-hover/button:scale-110 duration-150" />
              </Button>
            </form>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Delete Product</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
