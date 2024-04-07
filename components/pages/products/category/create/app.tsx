import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import FormCreateProductCategory from "./form-create-category";

export default function CreateProductCategoryApp() {
  return (
    <div id="createproductcategoryapp" className="w-full h-full">
      <div className="container mx-auto p-4 space-y-4">
        <div className="flex items-center gap-4">
          <Link href={"/products/category"}>
            <Button variant={"outline"} size={"icon"}>
              <ArrowLeft size={20} />
            </Button>
          </Link>
          <h1>Create Product Category</h1>
        </div>
        <FormCreateProductCategory />
      </div>
    </div>
  );
}
