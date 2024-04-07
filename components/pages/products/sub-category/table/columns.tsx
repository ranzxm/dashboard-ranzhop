"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { CategoryType, SubCategoryType } from "@/lib/types/product";
import { ColumnDef } from "@tanstack/react-table";
import { Edit } from "lucide-react";
import Link from "next/link";

type SubCategory = {
  categories: CategoryType;
} & SubCategoryType;

export const columns: ColumnDef<SubCategory>[] = [
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
    header: "Code",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "categories",
    header: "Category",
    accessorFn: (row) => row.categories.name,
  },
  {
    id: "action",
    header: "Action",
    cell: ({ row }) => (
      <Link href={`/products/sub-category/update/${row.original.id}`}>
        <Button size={"icon"} variant={"outline"}>
          <Edit size={16} />
        </Button>
      </Link>
    ),
  },
];
