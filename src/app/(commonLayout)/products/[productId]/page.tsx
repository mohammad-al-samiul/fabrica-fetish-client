"use client";
import CardDetails from "@/components/ui/CardDetails";
import Loading from "@/components/ui/Loading";
import { useGetSingleProduct } from "@/hooks/product.hook";

export default function ProductDetails({ params }: { params: any }) {
  const { productId } = params;
  const { data, isLoading } = useGetSingleProduct(productId);

  const product = data?.data;
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <CardDetails product={product} />
    </>
  );
}
