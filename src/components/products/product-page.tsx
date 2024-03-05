import Image from "next/image";
import { Product } from "@/lib/types";
import { addToCart, cartItems } from "@/lib/stores/cart";
import { AddToCart } from "./add-to-cart";

export const ProductPage = ({ product }: { product: Product }) => {
  return (
    <div className="mx-auto mt-24 flex max-w-3xl gap-12">
      <div className="mb-6">
        <Image
          src={product.image}
          alt={product.name}
          className="h-full w-96 rounded-t-lg object-cover"
          width={500}
          height={600}
        />
      </div>
      <div className="flex h-[450px] w-96 flex-col justify-evenly gap-6 text-center">
        <div>
          <h1 className="mb-2 text-3xl font-bold">{product.name}</h1>
          <p className="mb-4">{product.description}</p>
        </div>
        <div>
          <span className="mb-4 block text-4xl font-bold">
            {product.price} {product.currency}
          </span>

          <AddToCart product={product} />
        </div>
      </div>
    </div>
  );
};
