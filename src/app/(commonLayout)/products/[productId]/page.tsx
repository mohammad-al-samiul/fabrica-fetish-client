import React from "react";

interface IProps {
  params: {
    productId: string;
  };
}

export default async function ProductDetails({ params }: IProps) {
  const { productId } = await params;
  return <div>Product Details {productId}</div>;
}
