"use client";
import Link from "next/link";
import Image from "next/image";
import SliderItem from "./SliderItem";
import getRecents from "../../lib/getRecents";
import { useEffect, useState } from "react";

const slider = async ({ slides }) => {
  const [postsData, setPostsData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      cache: "no-cache",
    })
      .then((res) => res.json())
      .then((data) => setPostsData((prev) => [...prev, ...data]));
  }, []);

  const posts = postsData.map((post) => {
    return <SliderItem key={post.id} data={post} />;
  });

  const [idx, setIdx] = useState(0);
  const handlePrev = () => {
    setIdx((prev) => (prev == 0 ? posts.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setIdx((prev) => (prev == posts.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="relative overflow-scroll lg:overflow-hidden">
        <div
          className="flex gap-2 transition-transform duration-100 ease-out lg:p-2"
          style={{ transform: `translateX(-${idx * 100}%)` }}
        >
          {posts}
        </div>
      </div>
      <div className="mx-auto  mb-10 hidden h-fit flex-wrap justify-between gap-40 rounded-lg bg-gray-200 p-1 lg:flex lg:w-fit">
        <button
          className="rounded-md border border-prime2 p-1 hover:bg-prime1"
          onClick={handleNext}
        >
          <Image
            src="/icons/arrow-left-solid.svg"
            alt="Logo"
            width={20}
            height={20}
          />
        </button>
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
        <button
          className="rounded-md border border-prime2 p-1 hover:bg-prime1"
          onClick={handlePrev}
        >
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
};

export default slider;
