import { persistentAtom } from "@nanostores/persistent";
import { CartItem } from "../types";

export const cartItems = persistentAtom<CartItem[]>("cart", [], {
  encode: JSON.stringify,
  decode: JSON.parse,
});

export function addToCart(product: CartItem) {
  const currentItems = cartItems.get();
  const existingItemIndex = currentItems.findIndex(
    (item) => item.id === product.id,
  );

  if (existingItemIndex !== -1) {
    // If the item exists, increase its quantity
    const updatedItems = currentItems.slice();
    updatedItems[existingItemIndex] = {
      ...updatedItems[existingItemIndex],
      quantity: updatedItems[existingItemIndex].quantity + 1,
    };
    cartItems.set(updatedItems);
  } else {
    // If the item doesn't exist, add it to the cart
    cartItems.set([...currentItems, { ...product, quantity: 1 }]);
  }
}

export function removeFromCart(productId: string) {
  const currentItems = cartItems.get();
  const updatedItems = currentItems.filter((item) => item.id !== productId);
  cartItems.set(updatedItems);
}

export function updateQuantity(productId: string, quantity: number) {
  const currentItems = cartItems.get();
  const updatedItems = currentItems.map((item) =>
    item.id === productId ? { ...item, quantity: Math.max(quantity, 0) } : item,
  );
  cartItems.set(updatedItems);
}
