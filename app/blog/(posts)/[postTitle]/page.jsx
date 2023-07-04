import Recents from "@components/blog/Recents";

import Link from "next/link";
import Image from "next/image";
import i1 from "@public/images/img1.jpg";

const BlogPost = ({ params }) => {
  return (
    <>
      <h1 className="mb-10 text-4xl font-semibold ">
        Blog <span className="text-3xl text-prime2">/ category</span>
      </h1>
      <article>
        <h2 className="mb-5 text-5xl font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h2>
        <section className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <Link href="/" className="flex  items-center gap-2">
            <Image src={i1} alt="Logo" className="h-10 w-10 rounded-full" />
            <div>
              <p className="text-lg font-semibold">Author Name</p>
              <p>30 june 2023 / 12:45</p>
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
              <span className="hidden lg:inline">Share</span>
            </button>
            <button className="btn-base-styl btn-second flex items-center gap-2">
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
              <span className="hidden lg:inline">Like</span>
            </button>
          </div>
        </section>
        <section className="mt-10">
          <Image src={i1} alt="Logo" className="mb-10 w-full rounded-xl" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            harum iste quae! Facere ex quae, architecto nemo nulla vitae aliquid
            quos. Consequuntur, culpa officiis magni atque omnis saepe voluptas
            iste a minima doloremque eius totam maiores fugit pariatur.
            Accusantium veritatis quia laudantium soluta, quos nulla maiores
            repellat quas quidem dolores amet nemo voluptas omnis cum rem autem
            pariatur tenetur! Voluptate quod repellendus quidem ad sit facere,
            consequatur nostrum officia perspiciatis possimus iste eum.
            Obcaecati, deleniti ab! Earum, illum voluptatibus ratione veniam sed
            quod id, accusamus nisi vero suscipit voluptate cumque doloremque.
            Quas placeat praesentium amet, tempora saepe aliquam. Quas quod
            doloribus quibusdam harum mollitia id veritatis? Assumenda aliquid
            cupiditate vel totam debitis corrupti libero. Ad beatae vero nihil
            vitae odit laborum aspernatur deleniti assumenda non porro
            doloremque nulla eum laudantium saepe molestias, atque impedit
            recusandae, labore esse debitis dolore? Culpa illum ipsam, quam
            tenetur iure tempora ullam quos maiores eos magnam laudantium?
            Eligendi voluptatem error officia aspernatur repellat fugiat
            quibusdam! Assumenda, soluta rem quis reiciendis nihil voluptatem
            facilis ipsam aliquam optio ducimus aut nobis doloremque ipsum
            necessitatibus tenetur incidunt dolores enim vel fuga quibusdam
            veritatis. Illo possimus incidunt, facilis explicabo delectus a
            repellendus saepe placeat at assumenda velit nesciunt odio.
          </p>
        </section>
      </article>
      <h3 className="my-10 mb-5 text-3xl font-semibold">See Other Blogs</h3>
      <Recents />
    </>
  );
};

export default BlogPost;
