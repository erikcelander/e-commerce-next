import Image from "next/image";
import Link from "next/link";
import ProductImage from "../../public/produkt.jpeg";

export default function Home() {
  return (
    <main className="flex-1">
      <section className="w-full py-6 md:py-12 lg:py-16 xl:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center gap-6 lg:flex-row-reverse lg:gap-12">
            <Image src={ProductImage} className="" width={400} alt="Product" />

            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Spring Collection
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Introducing the latest styles for the season. Embrace comfort
                  and elegance with our hand-picked selection.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[600px]:flex-row">
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="/products"
                >
                  Explore
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
