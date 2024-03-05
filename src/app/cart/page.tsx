"use client";

import { useStore } from "@nanostores/react";
import { cartItems } from "@/lib/stores/cart";
import { useEffect, useState } from "react";

export default function Page() {
  const [isClient, setIsClient] = useState(false);
  const cart = useStore(cartItems);

  useEffect(() => {
    // Component did mount, indicating we're now client-side
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <div>
        {" "}
        {cart.map((item) => {
          return (
            <div className="flex w-96 flex-row justify-between " key={item.id}>
              <h1>{item.name}</h1>

              <h1>
                {item.price} {item.currency}
              </h1>
              <h1>{item.quantity}</h1>
            </div>
          );
        })}{" "}
      </div>
    </main>
  );
}
