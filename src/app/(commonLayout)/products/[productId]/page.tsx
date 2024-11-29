import CardDetails from "@/components/ui/CardDetails";
import { getSingleProduct } from "@/services/ProductService";
import React from "react";

interface IProps {
  params: {
    productId: string;
  };
}

export default async function ProductDetails({ params }: IProps) {
  const { productId } = await params;
  const { data: product } = await getSingleProduct(productId);
  return (
    <div className="">
      <CardDetails product={product} />
    </div>
  );
}
