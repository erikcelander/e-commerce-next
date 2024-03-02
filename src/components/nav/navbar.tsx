import Link from "next/link";
import { NavMenu } from "./nav-menu";

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

      <div className="w-32 text-end">
        <Link
          className=" hover:text-primary/80 duration-250 pr-5 transition-colors"
          href={"/cart"}
        >
          cart
        </Link>
      </div>
    </div>
  );
}
