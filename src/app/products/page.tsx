import { Products } from "@/components/products/products";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function Page() {
  return (
    <main className="flex min-h-[calc(100vh-64px)] flex-col items-center">
      <Products />
    </main>
  );
}
