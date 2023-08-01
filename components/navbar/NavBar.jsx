import Link from "next/link";
import Image from "next/image";
import Menus from "./Menus";

const NavBar = () => {
  return (
    <header className="transp fixed z-50 w-full">
      <nav className=" z-10 mx-auto flex max-w-screen-2xl flex-wrap items-center justify-between p-5 lg:flex-nowrap">
        <Link href="/" className="flex w-1/2 items-center gap-2 lg:w-1/3">
          <Image
            src="/images/white-up.png"
            alt="Logo"
            width={50}
            height={50}
            className="rounded-xl"
          />
          <span className="from-compt-gred bg-gradient-to-r bg-clip-text text-lg font-bold text-transparent">
            Computerizer
          </span>
        </Link>

        <Menus />
      </nav>
    </header>
  );
};

export default NavBar;
