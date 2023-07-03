import Link from "next/link";
import Image from "next/image";
import i1 from "@public/images/img1.jpg";

const BlogCard = () => {
  return (
    <Link href="/blog/posts" className="w-fit basis-full border lg:m-0">
      <Image src={i1} alt="Logo" className="w-full rounded-t-xl" />
      <div className="flex flex-col gap-8 p-3 lg:justify-between">
        <div>
          <h3 className="ml-2 text-prime2">/ review</h3>
          <h2 className="line-clamp-3 text-3xl font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <Image src={i1} alt="Logo" className="h-10 w-10 rounded-full" />
          <div>
            <p className="font-semibold">Author Name</p>
            <p>30 june 2023 / 12:45</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
