"use client";

import { useStore } from "@nanostores/react";
import { cartItems } from "@/lib/stores/cart";
import { useEffect, useState } from "react";
import Cart from "@/components/cart/cart";

export default function Page() {
  const [isClient, setIsClient] = useState(false);
  const items = useStore(cartItems);

  useEffect(() => {
    // Component did mount, indicating we're now client-side
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
  return (
    <main className="flex min-h-[calc(100vh-64px)] flex-col items-center ">
      <div>
        <Cart items={items} />
      </div>
    </main>
  );
}
