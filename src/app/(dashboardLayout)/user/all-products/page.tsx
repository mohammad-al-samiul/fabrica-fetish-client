import ProductsTable from "@/components/ui/dashboard/user/ProductsTable";
import { getAllProducts } from "@/services/ProductService";
import React from "react";

export default async function AllProducts() {
  const { data: products } = await getAllProducts();

  console.log(products);

  return (
    <div>
      <ProductsTable products={products} />
    </div>
  );
}
