export type TParams = {
  productId: string;
};

export type TSearchProps = {
  category: string;
};

export default function ProductDetails({
  params,
  searchParams,
}: {
  params: TParams;
  searchParams: TSearchProps;
}) {
  return (
    <div>
      Product Details {params.productId} product category{" "}
      {searchParams.category}
    </div>
  );
}
