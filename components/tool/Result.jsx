"use client";

import PartCard from "./PartCard";

const Result = ({ data, parts }) => {
  return (
    <>
      <section>
        <h2 className="mb-5 text-3xl font-bold lg:text-5xl">
          Congrats for your first Computer!!
        </h2>

        <div>
          <h3 className="flex w-full justify-between text-xl">
            <span>Budget:</span>{" "}
            <span className="font-bold">{data.budget} $</span>
          </h3>
          <h3 className="flex w-full justify-between text-xl">
            <span>FPS:</span> <span className="font-bold">{data.fps}</span>
          </h3>
          <h3 className="flex w-full justify-between text-xl">
            <span>formFactor:</span>{" "}
            <span className="font-bold">{data.formFactor}</span>
          </h3>
          <h3 className="flex w-full justify-between text-xl">
            <span>Theme:</span> <span className="font-bold">{data.theme}</span>
          </h3>
          <h3 className="flex w-full justify-between text-xl">
            <span>RGP:</span>{" "}
            <span className="font-bold">{data.RGP ? "True" : "False"}</span>
          </h3>
        </div>
        <button className="btn-base-styl btn-prime my-2 w-full lg:w-fit">
          Edit
        </button>
      </section>
      <section>
        <h2 className="mb-5 text-3xl font-bold lg:text-5xl">Summary</h2>
        {/* {parts.map((part) => (
          <PartCard key={part.id} id={part.id} data={part} />
        ))} */}
        <PartCard data={parts[0]} />
        <div className="mt-2 flex items-center justify-between gap-2 lg:justify-start">
          <button className="btn-base-styl btn-prime w-3/4 lg:w-fit">
            Buy It Now!
          </button>
          <button className="btn-base-styl btn-second w-1/4 lg:lg:w-fit">
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
          </button>
        </div>
      </section>
    </>
  );
};

export default Result;
