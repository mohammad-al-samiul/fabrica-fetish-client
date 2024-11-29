import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import { getRecentProducts } from "@/services/ProductService";

import { IProduct } from "@/types";

export default async function RecentProducts() {
  const { data: products } = await getRecentProducts();

  return (
    <Container>
      <div className="mt-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 items-center justify-center">
          {products?.map((item: IProduct) => (
            <Card key={item._id} item={item} />
          ))}
        </div>
      </div>
    </Container>
  );
}
