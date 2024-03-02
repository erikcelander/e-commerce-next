import { getProducts } from "@/actions";
import { ProductCard } from "./product-card";

export const Products = async () => {
  // const products = await getProducts();

  return (
    <div>
      <ProductCard />
      <ProductCard />
    </div>
  );
};
