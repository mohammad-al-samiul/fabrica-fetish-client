"use client";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import { useGetRecentProducts } from "@/hooks/product.hook";
import { getRecentProducts } from "@/services/ProductService";

import { IProduct } from "@/types";
import Loading from "./loading";

export default function RecentProducts() {
  const { data, isLoading } = useGetRecentProducts();

  const products = data?.data;

  return (
    <>
      <h2 className="text-3xl font-bold text-center mt-14 uppercase">
        Featured Products
      </h2>
      {isLoading && <Loading />}
      <Container>
        <div className="mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 items-center justify-center p-5">
            {products?.map((item: IProduct) => (
              <Card key={item._id} item={item} />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
