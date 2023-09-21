import Recents from "@components/blog/Recents";
import Link from "next/link";
import Image from "next/image";
import i1 from "@public/images/img1.jpg";
//import { useEffect, useState } from "react";

async function getData() {
  const res = await fetch("http://127.0.0.1:8000/blog/post/How to build a PC", {
    cache: "no-cache",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const BlogPost = async ({ params, postTitle }) => {
  const data = await getData();
  console.log(data.categories);

  return (
    <>
      <h1 className="mb-10 text-4xl font-semibold ">
        Blog{" "}
        <span className="text-3xl text-prime2">/ {data.categories[0]}</span>
      </h1>
      <article>
        <h2 className="mb-5 text-5xl font-semibold">{data.title}</h2>
        <section className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <Link href="/" className="flex  items-center gap-2">
            <Image src={i1} alt="Logo" className="h-10 w-10 rounded-full" />
            <div>
              <p className="text-lg font-semibold">{data.author}</p>
              <p>{data.publish_date}</p>
            </div>
          </Link>
          <div className="flex  gap-2 ">
            <button className="btn-base-styl btn-prime flex items-center gap-2">
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
                  d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                />
              </svg>
              <span className="hidden font-bold lg:inline">Share</span>
            </button>
            <button className="btn-base-styl btn-second flex items-center gap-1">
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
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
              <span className="hidden font-bold lg:inline">
                {data.likes} Likes
              </span>
            </button>
          </div>
        </section>
        <section className="mt-10">
          <Image src={i1} alt="Logo" className="mb-10 w-full rounded-xl" />
          <div dangerouslySetInnerHTML={{ __html: data.body }}></div>
        </section>
      </article>
      <h3 className="my-10 mb-5 text-3xl font-semibold">See Other Blogs</h3>
      <Recents />
    </>
  );
};

export default BlogPost;
