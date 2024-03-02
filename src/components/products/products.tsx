import { getProducts } from "@/actions";
import { ProductCard } from "./product-card";

export const Products = async () => {
  const products = await getProducts();

  return (
    <div className="flex w-full items-center justify-center p-12">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};
