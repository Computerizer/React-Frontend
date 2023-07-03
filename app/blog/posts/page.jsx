import Recents from "@components/blog/Recents";

import Link from "next/link";
import Image from "next/image";
import i1 from "@public/images/img1.jpg";

const BlogPost = () => {
  return (
    <>
      <h1 className="mb-10 text-5xl font-semibold ">
        Blog <span className="text-3xl">/ category</span>
      </h1>
      <article>
        <h2 className="mb-5 text-5xl font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </h2>
        <section className="flex items-center gap-2">
          <Image src={i1} alt="Logo" className="h-10 w-10 rounded-full" />
          <div>
            <p className="text-lg font-semibold">Author Name</p>
            <p>30 june 2023 / 12:45</p>
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
