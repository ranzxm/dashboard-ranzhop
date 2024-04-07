"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { CategoryType, ProductsType, SubCategoryType } from "@/lib/types/product";
import { formatCurrency } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { Edit } from "lucide-react";
import Link from "next/link";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Products = {
  categories: CategoryType;
  subCategories: SubCategoryType;
} & ProductsType;

export const columns: ColumnDef<Products>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
  },
  {
    accessorKey: "code",
    header: "Product Code",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => {
      return formatCurrency(row.original.price);
    },
  },
  {
    accessorKey: "basePrice",
    header: "Base Price",
    cell: ({ row }) => {
      return formatCurrency(row.original.basePrice);
    },
  },
  {
    accessorKey: "quantity",
    header: "Stock",
  },
  {
    accessorKey: "categories",
    header: "Category",
    accessorFn: (row) => {
      return row.categories.name;
    },
    filterFn: (row, id, value) => value.includes(row.original.categories.value),
  },
  {
    accessorKey: "subCategories",
    header: "Sub. Category",
    accessorFn: (row) => {
      return row.subCategories.name;
    },
    filterFn: (row, id, value) => value.includes(row.original.subCategories.value),
  },
  {
    id: "action",
    header: "Action",
    cell: ({ row }) => (
      <Link href={`/products/update/${row.original.id}`}>
        <Button size={"icon"} variant={"outline"}>
          <Edit size={16} />
        </Button>
      </Link>
    ),
  },
];
