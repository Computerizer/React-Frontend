"use client";

import Image from "next/image";
import SliderItem from "./SliderItem";
import { useEffect, useState } from "react";

const slider = async ({ posts }) => {
  // keep track of posts index
  const [idx, setIdx] = useState(0);

  // auto sliding effect
  useEffect(() => {
    const lastIdx = posts.length - 1;
    if (idx < 0) {
      setIdx(lastIdx);
    }
    if (idx > lastIdx) {
      setIdx(0);
    }
  }, [idx]);

  useEffect(() => {
    let sldr = setInterval(() => {
      setIdx((prev) => prev + 1);
    }, 6000);
    return () => {
      clearInterval(sldr);
    };
  }, [idx]);

  return (
    <section>
      <div className="relative overflow-scroll lg:overflow-hidden ">
        <div
          className="flex gap-2 transition-transform duration-500 ease-out lg:gap-0"
          style={{ transform: `translateX(-${idx * 100}%)` }}
        >
          {posts.map((post) => (
            <SliderItem key={post.id} data={post} />
          ))}
        </div>
      </div>
      <div className="mx-auto  mb-10 hidden h-fit flex-wrap justify-between gap-40 rounded-lg bg-gray-200 p-1 lg:flex lg:w-fit">
        <button
          className="rounded-md p-1 hover:bg-prime1"
          onClick={() => {
            setIdx((prev) => (prev == 0 ? posts.length - 1 : prev - 1));
          }}
        >
          <Image
            src="/icons/arrow-left-solid.svg"
            alt="Logo"
            width={20}
            height={20}
          />
        </button>
        <div className="flex items-center gap-2">
          {posts.map((_, i) => (
            <div
              key={i}
              className={`h-3 w-3 rounded-full bg-black transition-all ${
                idx == i ? "p-2" : "bg-opacity-50"
              }`}
            ></div>
          ))}
        </div>
        <button
          className="rounded-md p-1 hover:bg-prime1"
          onClick={() => {
            setIdx((prev) => (prev == posts.length - 1 ? 0 : prev + 1));
          }}
        >
          <Image
            src="/icons/arrow-right-solid.svg"
            alt="Logo"
            width={20}
            height={20}
          />
        </button>
      </div>
    </section>
  );
};

export default slider;
