import CardDetails from "@/components/ui/CardDetails";
import { getSingleProduct } from "@/services/ProductService";
import React from "react";

interface IProps {
  productId: string;
}

export default async function ProductDetails({
  params,
}: {
  params: any;
}): Promise<any> {
  const { productId } = params;
  const { data: product } = await getSingleProduct(productId);
  return (
    <div className="">
      <CardDetails product={product} />
    </div>
  );
}
