import Image from "next/image";
export const ProductCard = () => {
  return (
    <div className="flex ">
      <div
        className="bg-card text-card-foreground w-64 rounded-lg border shadow-sm"
        data-v0-t="card"
      >
        <Image
          src="/placeholder.png"
          alt="Product Image"
          className="h-64 w-full object-cover"
          width={200}
          height={200}
          layout="responsive"
        />
        <div className="p-6">
          <h2 className="text-lg font-semibold">Product Name</h2>
          <p className="text-gray-500">Product Description</p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-xl font-bold">$99.99</span>
            <div className="h-6 w-6 rounded-full bg-red-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
