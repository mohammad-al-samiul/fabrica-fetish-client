import AllProducts from "@/components/home/AllProducts";
import { getAllProducts } from "@/services/ProductService";

export default async function Products() {
  const { data: allProducts } = await getAllProducts();
  return (
    <div>
      <AllProducts allProducts={allProducts} />
    </div>
  );
}
