"use client";
import AllProducts from "@/components/home/AllProducts";
import Loading from "@/components/ui/Loading";
import { useGetAllProducts } from "@/hooks/product.hook";

export default function Products() {
  const { data, isLoading } = useGetAllProducts();

  const allProducts = data?.data;

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <AllProducts allProducts={allProducts} />
    </div>
  );
}
