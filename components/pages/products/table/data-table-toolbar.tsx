import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Table } from "@tanstack/react-table";
import React from "react";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";
import { CategoryType, ProductsType, SubCategoryType } from "@/lib/types/product";
import { Settings2, Trash } from "lucide-react";
import { ButtonCreateProduct, ButtonDeleteProduct } from "@/components/buttons";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  facetedData: {
    categories: CategoryType[];
    subCategories: SubCategoryType[];
  };
}

export default function DataTableToolbar<TData>({
  table,
  facetedData,
}: DataTableToolbarProps<TData>) {
  return (
    <div id="datatabletoolbar">
      <div className="flex items-center flex-wrap gap-2 ">
        <Input
          placeholder="Search product"
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) => table.getColumn("name")?.setFilterValue(event.target.value)}
          className="max-w-sm order-2 md:order-none"
        />
        {table.getColumn("categories") && (
          <DataTableFacetedFilter
            table={table}
            column={table.getColumn("categories")}
            title="Category"
            options={facetedData.categories}
          />
        )}
        {table.getColumn("subCategories") && (
          <DataTableFacetedFilter
            table={table}
            column={table.getColumn("subCategories")}
            title="Sub Category"
            options={facetedData.subCategories}
          />
        )}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto space-x-2 hidden md:block">
              <Settings2 size={16} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Toggle Column</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) => column.toggleVisibility(!!value)}
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <ButtonCreateProduct />
      {(table.getIsSomeRowsSelected() || table.getIsAllRowsSelected()) && (
        <ButtonDeleteProduct table={table} />
      )}
    </div>
  );
}
