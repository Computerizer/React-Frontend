import i1 from "@public/images/img1.jpg";
import Image from "next/image";
import Link from "next/link";

const SliderItem = ({ data }) => {
  return (
    <div className="mb-8 mt-5 w-full shrink-0 overflow-hidden rounded-xl border lg:m-0 lg:mb-3 lg:flex lg:h-[60vh]">
      <Image src={i1} alt="Logo" className="lg:w-7/12" />
      <div className="justify-bitween flex flex-col p-3 lg:w-5/12 lg:pb-4 lg:pt-6">
        <div>
          <h3 className="text-prime2">/ review</h3>
          <Link
            href="/blog/How to creat your first PC?"
            className="line-clamp-3 text-3xl font-semibold lg:text-4xl"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Link>
        </div>
        <p className="line-clamp-3 lg:line-clamp-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias autem,
          facilis consequuntur sequi fuga beatae, veritatis sunt, excepturi amet
          voluptatum debitis. Perspiciatis, accusamus voluptates. Ipsum?
        </p>
        <div className="flex items-end justify-between lg:mt-auto">
          <div className="flex items-center gap-2">
            <Image src={i1} alt="Logo" className="h-10 w-10 rounded-full" />
            <div>
              <p className="font-semibold">{data.name}</p>
              <p>30 june 2023 / 1</p>
            </div>
          </div>
          <button className="end-0 flex items-center gap-2 rounded-lg bg-gray-200 p-2">
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
          </button>
        </div>
      </div>
    </div>
  );
};

export default SliderItem;