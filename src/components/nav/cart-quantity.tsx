"use client";
import { useStore } from "@nanostores/react";
import { cartItems } from "@/lib/stores/cart";
import { useEffect, useState } from "react";

export const CartQuantity = () => {
  const [isClient, setIsClient] = useState(false);
  const items = useStore(cartItems);
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    // Component did mount, indicating we're now client-side
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Server-side render or initial client render before hydration,
    // render placeholder or nothing to match server-rendered markup.
    return null; // or a loading spinner, etc.
  }

  return <div>{totalQuantity}</div>;
};
