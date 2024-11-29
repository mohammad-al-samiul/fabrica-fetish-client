import { getRecentProducts } from "@/services/ProductService";
import React from "react";
import Card from "../ui/Card";
import { IProduct } from "@/types";

export default async function Feature() {
  const { data: products } = await getRecentProducts();

  // console.log(products);

  return (
    <section className="py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((item: IProduct) => (
          <Card key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
}
