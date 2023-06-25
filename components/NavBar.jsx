"use client";

import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  let width = window.innerWidth >= 768 ? true : false;

  return (
    <header className="transp fixed z-50 w-full">
      <nav className="z-10 mx-auto flex max-w-screen-2xl items-center justify-between p-5">
        <Link href="/" className="flex w-1/3 items-center gap-2">
          <Image
            src="/images/white-up.png"
            alt="Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <span className="text-lg font-bold">Computerizer</span>
        </Link>
        {width && (
          <>
            <ul className="flex w-1/3 items-center justify-center gap-5">
              <li>
                <Link href="/" className="actvie">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/tool">Tool</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
            <div className="item-center flex w-1/3 justify-end gap-3">
              <button className="btn-base-styl btn-second flex gap-2">
                <Image
                  src="/icons/magnifying-glass-solid.svg"
                  alt="Logo"
                  width={15}
                  height={15}
                />
                Search
              </button>
              <button className="btn-base-styl btn-prime">Sign In</button>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
