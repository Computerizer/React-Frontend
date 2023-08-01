"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const Menus = () => {
  const menusTitles = ["home", "tool", "blog", "about"];
  const path = usePathname();
  const [menusItems, setMenusItems] = useState([]);
  useEffect(() => {
    setMenusItems(
      menusTitles.map((title) => {
        if (title === "home") {
          if (path === "/") {
            return (
              <li key={title}>
                <Link href="/" className="actvie capitalize">
                  {title}
                </Link>
              </li>
            );
          } else {
            return (
              <li key={title}>
                <Link href="/" className="capitalize">
                  {title}
                </Link>
              </li>
            );
          }
        } else {
          if (path.slice(1) === title) {
            return (
              <li key={title}>
                <Link href={`/${title}`} className="actvie capitalize">
                  {title}
                </Link>
              </li>
            );
          } else {
            return (
              <li key={title}>
                <Link href={`/${title}`} className="capitalize">
                  {title}
                </Link>
              </li>
            );
          }
        }
      })
    );
  }, [path]);

  // menu icon
  const isMobile = window.innerWidth < 1024 ? true : false;
  const [menu, setMenu] = useState(!isMobile);
  const style = {
    display: isMobile ? (!menu ? "none" : "flex") : "flex",
  };
  function openMenu() {
    setMenu((prev) => !prev);
  }

  // search bar
  const [search, setSearch] = useState(false);
  function toggleSearch() {
    setSearch((prev) => !prev);
  }

  return (
    <>
      <button className="w-1/2 lg:hidden" onClick={openMenu}>
        {!menu ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="ml-auto h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="ml-auto h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </button>
      <div
        className="mt-3 w-full flex-col items-center justify-center gap-3 text-center lg:mt-0 lg:w-2/3 lg:flex-row lg:justify-between"
        style={style}
      >
        <ul className="lg:flex lg:w-1/2 lg:justify-center lg:gap-3">
          {menusItems}
        </ul>
        <div className="lg:flex-end flex gap-3 lg:ml-auto ">
          {search ? (
            <form className="relative">
              <input
                type="text"
                className="input-second h-full w-52"
                placeholder="Serach"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="absolute right-3 top-2 inline h-6 w-6 text-slate-500 hover:cursor-pointer"
                onClick={toggleSearch}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </form>
          ) : (
            <button
              className="btn-base-styl btn-second flex items-center gap-2"
              onClick={toggleSearch}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              Search
            </button>
          )}
          <button className="btn-base-styl btn-prime" title="Coming soon!">
            <Link href="/">Sign Up</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Menus;
