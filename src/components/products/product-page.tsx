import Image from "next/image";
import { Product } from "@/lib/types";

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
          <button
            className="text-primary-foreground bg-foreground inline-flex h-10 w-72 items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition-colors hover:bg-white/80
        "
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
