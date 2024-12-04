"use client";
import ProductsTable from "@/components/ui/dashboard/user/ProductsTable";
import Loading from "@/components/ui/Loading";
import { useGetAllProducts } from "@/hooks/product.hook";

export default function AllProducts() {
  const { data, isLoading } = useGetAllProducts();

  const products = data?.data;

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <ProductsTable products={products} />
    </>
  );
}
