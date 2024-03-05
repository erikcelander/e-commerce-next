import Link from "next/link";
import { NavMenu } from "./nav-menu";
import { CartQuantity } from "./cart-quantity";

export async function NavBar({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <div
      className={` border-b-primary/30 flex h-16 items-center justify-between border-b`}
      {...props}
    >
      <div className="flex w-32 flex-initial flex-row items-center">
        <h3 className="text-primary  items-center pl-5 text-center text-2xl ">
          next
        </h3>
      </div>

      <NavMenu />

      <div className="flex items-center justify-center pr-5 text-end">
        <Link
          className=" hover:text-primary/80 duration-250 transition-colors"
          href={"/cart"}
        >
          cart
        </Link>
        <div className="absolute mb-6 ml-8 text-sm">
          <CartQuantity />
        </div>
      </div>
    </div>
  );
}
