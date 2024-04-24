"use client";

import { CartItemType, Product } from "@/lib/types";
import { addToCart, cartItems } from "@/lib/stores/cart";

export const AddToCart = ({ product }: { product: Product }) => {
  const handleOnClick = () => {
    const cartItem: CartItemType = {
      id: product.id,
      name: product.name,
      currency: product.currency,
      image: product.image,
      description: product.description,
      price: product.price,
      quantity: 1,
      stock: product.stock,
    };

    addToCart(cartItem);
  };

  return (
    <div className="">
      <button
        onClick={handleOnClick}
        className="text-primary-foreground bg-foreground inline-flex h-10 w-72 items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition-colors hover:cursor-pointer hover:bg-white/80
        "
      >
        Add to cart
      </button>
    </div>
  );
};
