import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/types";

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link
      className="flex outline-none focus:outline-none"
      href={`/products/${product.id}`}
      passHref
    >
      <div
        className="bg-card text-card-foreground w-64 transform rounded-lg border shadow-sm transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
        data-v0-t="card"
      >
        <Image
          src={product.image}
          alt={product.name}
          className="h-64 w-full rounded-t-lg object-cover"
          width={200}
          height={200}
        />
        <div className="p-6">
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-gray-500">{product.description}</p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-xl font-bold">{` ${product.price} ${product.currency}`}</span>
            <div
              className={`h-4 w-4 rounded-full ${product.stock > 0 ? "bg-green-500" : "bg-red-500"}`}
            ></div>
          </div>
        </div>
      </div>
    </Link>
  );
};
