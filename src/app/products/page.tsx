import { Products } from "@/components/products/products";

export default function Page() {
  // const products = await getProducts()

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <Products />
      </div>
    </main>
  );
}
