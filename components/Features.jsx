const Features = () => {
  return (
    <section className="pt-20">
      <div className="mx-auto  rounded-lg bg-bgDark2 p-10 text-white lg:flex lg:items-center lg:gap-3 lg:p-16">
        <h1 className="text-5xl font-bold lg:w-1/4">
          Join PC world <span className="trans-text">now!</span>
        </h1>
        <ul className="mt-5 flex flex-col items-center gap-5 divide-y divide-textDark lg:mt-0 lg:w-3/4 lg:flex-row lg:justify-between lg:gap-0 lg:divide-x lg:divide-y-0">
          <li className="py-2 lg:py-0 lg:pl-5">
            <h2 className="trans-text mb-2 text-3xl font-semibold">
              Build like a pro
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium, nemo.
            </p>
          </li>
          <li className="py-2 lg:py-0 lg:pl-5">
            <h2 className="trans-text mb-2 text-3xl font-semibold">
              Lowest prices
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium, nemo.
            </p>
          </li>
          <li className="py-2 lg:py-0 lg:pl-5">
            <h2 className="trans-text mb-2 text-3xl font-semibold">
              Join community
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium, nemo.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Features;
