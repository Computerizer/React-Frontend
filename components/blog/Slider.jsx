"use client";

import Link from "next/link";
import Image from "next/image";
import i1 from "@public/images/img1.jpg";
import { useState } from "react";

const slider = ({ slides }) => {
  const cacrosel = slides.map((card) => {
    return (
      <>
        <div className="my-5 mb-8 overflow-hidden rounded-xl border lg:m-0 lg:mb-3 lg:flex lg:h-[60vh] lg:w-full">
          <Image src={i1} alt="Logo" className="lg:w-7/12" />
          <div className="flex flex-col gap-8 p-3 lg:w-5/12 lg:py-8">
            <div>
              <h3 className="text-prime2">/ review</h3>
              <Link
                href="/blog/How to creat your first PC?"
                className="line-clamp-3 text-3xl font-semibold lg:text-4xl"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </Link>
            </div>
            <p className="line-clamp-3 lg:line-clamp-5">{card.body}</p>
            <div className="flex items-center justify-between lg:mt-auto">
              <div className="flex items-center gap-2">
                <Image src={i1} alt="Logo" className="h-10 w-10 rounded-full" />
                <div>
                  <p className="font-semibold">Author Name</p>
                  <p>30 june 2023 / {card.id}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.5 7.5a3 3 0 013-3h9a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9z"
                    clipRule="evenodd"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto  mb-10 hidden h-fit flex-wrap justify-between gap-40 rounded-lg bg-gray-200 p-1 lg:flex lg:w-fit">
          <button>
            <Image
              src="/icons/arrow-left-solid.svg"
              alt="Logo"
              width={20}
              height={20}
            />
          </button>
          <button>
            <Image
              src="/icons/arrow-right-solid.svg"
              alt="Logo"
              width={20}
              height={20}
            />
          </button>
        </div>
      </>
    );
  });

  return <>{cacrosel[0]}</>;
};

export default slider;
