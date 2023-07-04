import Link from "next/link";
import Image from "next/image";
import i1 from "@public/images/img1.jpg";

const BlogCard = () => {
  return (
    <div className="w-fit shrink-0 rounded-lg border md:max-w-sm lg:m-0 lg:max-w-sm">
      <Image src={i1} alt="Logo" className="w-full rounded-t-xl" />
      <div className="flex flex-col gap-8 p-3 lg:justify-between">
        <div>
          <h3 className="ml-2 text-prime2">/ review</h3>
          <Link
            href="/blog/How to creat your first PC?"
            className="line-clamp-3 text-3xl font-semibold"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Link>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src={i1} alt="Logo" className="h-10 w-10 rounded-full" />
            <div>
              <p className="font-semibold">Author Name</p>
              <p>30 june 2023 / 12:45</p>
            </div>
          </div>
          <div className="end-0 flex items-center gap-2 rounded-lg bg-gray-200 p-2">
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
            <span>1342</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
