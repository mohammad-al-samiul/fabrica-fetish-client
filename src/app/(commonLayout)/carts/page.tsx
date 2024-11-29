import Cart from "@/components/ui/Cart";
import { getAllProducts } from "@/services/ProductService";
import React from "react";

export default async function Carts() {
  const { data: orders } = await getAllProducts();

  return (
    <div>
      <Cart orders={orders} />
    </div>
  );
}
