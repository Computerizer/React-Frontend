"use client";

import Slider from "@components/blog/Slider";
import BlogCard from "@components/blog/BlogCard";
import { useState } from "react";

const Blog = () => {
  const slides = [
    {
      id: 1,
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias autem, facilis consequuntur sequi fuga beatae, veritatis sunt, excepturi amet voluptatum debitis. Perspiciatis, accusamus voluptates. Ipsum?",
    },
    {
      id: 2,
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias autem, facilis consequuntur sequi fuga beatae, veritatis sunt, excepturi amet voluptatum debitis. Perspiciatis, accusamus voluptates. Ipsum?",
    },
    {
      id: 3,
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias autem, facilis consequuntur sequi fuga beatae, veritatis sunt, excepturi amet voluptatum debitis. Perspiciatis, accusamus voluptates. Ipsum?",
    },
    {
      id: 4,
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias autem, facilis consequuntur sequi fuga beatae, veritatis sunt, excepturi amet voluptatum debitis. Perspiciatis, accusamus voluptates. Ipsum?",
    },
    {
      id: 5,
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias autem, facilis consequuntur sequi fuga beatae, veritatis sunt, excepturi amet voluptatum debitis. Perspiciatis, accusamus voluptates. Ipsum?",
    },
  ];

  const [filters, setFilters] = useState(false);

  function toggleFilters(e) {
    e.preventDefault();
    setFilters((prev) => !prev);
  }

  const categ = ["Reviews", "Tutorials", "Parts", "Software"];

  const [categItems, setCategItems] = useState(
    categ.map((c) => {
      return (
        <button
          className="btn-base-styl hover:bg-prime1 hover:text-white "
          data-categ={c}
          onClick={toggleCateg}
          key={c}
        >
          {c}
        </button>
      );
    })
  );

  function toggleCateg(e) {
    setCategItems((prev) =>
      prev.map((ct) => {
        if (ct.props["data-categ"] === e.target.dataset.categ) {
          return (
            <button
              className="btn-base-styl active-btn hover:bg-prime1 hover:text-white"
              data-categ={ct.props["data-categ"]}
              onClick={toggleCateg}
              key={ct.props["data-categ"]}
            >
              {ct.props["data-categ"]}
            </button>
          );
        } else {
          return (
            <button
              className="btn-base-styl hover:bg-prime1 hover:text-white"
              data-categ={ct.props["data-categ"]}
              onClick={toggleCateg}
              key={ct.props["data-categ"]}
            >
              {ct.props["data-categ"]}
            </button>
          );
        }
      })
    );
  }

  return (
    <>
      <h1 className="mb-10 text-5xl font-semibold ">Blog</h1>
      <Slider slides={slides} />
      <section>
        <div className=" flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-0">
          <h1 className=" w-1/4 text-3xl font-semibold">Categories</h1>
          <div className=" h-fit w-full lg:w-1/2">
            <div className="mx-auto flex h-fit flex-wrap justify-between rounded-lg bg-gray-200 p-1 lg:w-fit">
              {categItems}
            </div>
          </div>
        </div>
        <form className="my-5 flex h-fit items-center gap-2">
          {!filters && (
            <button
              onClick={toggleFilters}
              className="btn-base-styl flex items-center gap-2 bg-gray-200"
            >
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
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                />
              </svg>
              <span className="hidden md:inline">Filters</span>
            </button>
          )}
          {filters && (
            <select
              name="categ"
              id="categ"
              onChange={toggleFilters}
              className="btn-base-styl"
            >
              <option value="new">New</option>
              <option value="read">Already read</option>
              <option value="trending">Trending</option>
            </select>
          )}
          <input
            type="text"
            placeholder="Search"
            className="w-full rounded-lg border-2 p-2"
          />
        </form>
      </section>
      <section className="grid w-full gap-8 md:grid-cols-2 lg:grid-cols-3">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </section>
    </>
  );
};

export default Blog;
