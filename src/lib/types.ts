export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  stock: number;
};

export type CartItemType = Product & {
  quantity: number;
};
