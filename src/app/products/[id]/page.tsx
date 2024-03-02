import { getProduct } from "@/actions";
import { ProductPage } from "@/components/products/product-page";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const product = await getProduct(id);

  return (
    <div className="flex w-full flex-col items-center justify-center">
      {product && <ProductPage product={product} />}
    </div>
  );
}
