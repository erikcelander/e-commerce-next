import Link from "next/link";

export const NavMenu = () => {
  return (
    <div className="text-primary flex w-48 flex-row justify-center gap-6">
      <Link
        className="hover:text-primary/80 duration-250 transition-colors"
        href={"/"}
      >
        home
      </Link>
      <Link
        className="hover:text-primary/80 duration-250 transition-colors"
        href={"/products"}
      >
        products
      </Link>
    </div>
  );
};
