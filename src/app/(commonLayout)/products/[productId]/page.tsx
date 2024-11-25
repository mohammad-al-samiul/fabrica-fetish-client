import React from "react";

interface IProps {
  params: {
    productId: string;
  };
}

export default function ProductDetails({ params }: IProps) {
  return <div>Product Details {params.productId}</div>;
}
