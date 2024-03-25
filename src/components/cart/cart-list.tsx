// CartList.js

import React from "react";
import { CartItemType } from "@/lib/types";
import CartItem from "./cart-item";

const CartList = ({ items }: { items: CartItemType[] }) => {
  return (
    <div className="grid gap-4 md:gap-8">
      {items.map((item, index) => (
        <React.Fragment key={item.id}>
          <CartItem item={item} />
          {index !== items.length - 1 && (
            <div className="w-full border-t shadow-md dark:border-gray-800"></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default CartList;
