"use client";

const step1 = ({ data, change, show }) => {
  return (
    <section className="lg:flex lg:justify-between">
      <label htmlFor="budget" className="text-xl font-bold lg:text-3xl">
        Budget: {data.budget}
      </label>
      <input
        type="range"
        className="w-full border-none lg:w-3/4"
        min="500"
        max="2500"
        step="100"
        value={data.budget}
        onChange={change}
        id="budget"
        name="budget"
      />
    </section>
  );
};

export default step1;
