import Link from "next/link";
import Slider1 from "./Slider1";

const Hero = () => {
  return (
    <section className=" w-full pt-5">
      <div className="min-h-h2 mx-auto flex max-w-screen-2xl">
        <div className="flex w-full flex-col justify-center gap-10 pr-10 sm:w-1/2">
          <h2 className="text-7xl font-bold">
            Welcome to your go to PC website!
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
            laboriosam quasi nulla minima dolor. Dolorem praesentium a similique
            id architecto?
          </p>
          <div className="flex gap-3">
            <button className="btn-base-styl btn-prime">Build a PC</button>
            <button className="btn-base-styl btn-second">Read more</button>
          </div>
        </div>
        <div className="hidden w-1/2 sm:inline-block">
          <Slider1 />
        </div>
      </div>
    </section>
  );
};

export default Hero;
