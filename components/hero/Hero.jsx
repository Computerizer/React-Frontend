import Link from "next/link";
import Slider1 from "./Slider1";

const Hero = () => {
  return (
    <section className="min-h-h2 container mx-auto flex lg:pt-5 ">
      <div className="flex w-full flex-col justify-center gap-10 pl-3 lg:w-1/2  lg:pr-10 ">
        <h1 className="text-7xl font-bold">
          Welcome to your go to{" "}
          <span className="from-compt-gred bg-gradient-to-r bg-clip-text text-transparent">
            PC website!
          </span>
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
          laboriosam quasi nulla minima dolor. Dolorem praesentium a similique
          id architecto?
        </p>
        <div className="flex w-full gap-3 ">
          <button className="btn-base-styl btn-prime">Build a PC</button>
          <button className="btn-base-styl btn-second">Read more</button>
        </div>
      </div>
      <div className="hidden w-1/2 lg:inline-block">
        <Slider1 />
      </div>
    </section>
  );
};

export default Hero;
