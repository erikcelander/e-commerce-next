import Link from "next/link";
import { NavMenu } from "./nav-menu";
import Image from "next/image";

export async function NavBar({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <div
      className={` border-b-primary/30 flex h-16 items-center justify-between border-b`}
      {...props}
    >
      <div className="flex flex-initial flex-row items-center">
        <h3 className="text-primary absolute items-center pl-5 text-center text-2xl ">
          next
        </h3>
      </div>

      <NavMenu />

      <div className=""></div>
    </div>
  );
}
