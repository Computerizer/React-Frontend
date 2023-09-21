"use client";

const Step2 = ({ change, data }) => {
  return (
    <section className="flex flex-col lg:flex lg:justify-between">
      <label htmlFor="formFactor" className="text-xl font-bold lg:text-3xl">
        Choose a form factor
      </label>
      <br />
      <select
        id="formFactor"
        value={data.resolution}
        onChange={change}
        name="formFactor"
        className="rounded-xl bg-prime1 px-6 py-2 text-white lg:w-1/4"
      >
        <option value="m-atx">Micro-ATX</option>
        <option value="atx">ATX</option>
      </select>
      <label htmlFor="theme" className="mt-2 text-xl font-bold lg:text-3xl">
        What is your favorite color?
      </label>
      <br />
      <select
        id="theme"
        value={data.resolution}
        onChange={change}
        name="theme"
        className="mb-2 rounded-xl bg-prime1 px-6 py-2 text-white lg:w-1/4"
      >
        <option value="dark">Dark</option>
        <option value="white">White</option>
      </select>
      <fieldset>
        <legend className="text-xl font-bold lg:text-3xl">RGP or Not?</legend>
        <div className="flex gap-2 text-lg">
          <input
            type="radio"
            id="RGP"
            name="RGP"
            value={true}
            checked={data.RGP}
            onChange={change}
          />
          <label htmlFor="RGP">RGP</label>
        </div>
        <div className="flex gap-2 text-lg">
          <input
            type="radio"
            id="RGP"
            name="RGP"
            value={false}
            checked={data.RGP}
            onChange={change}
          />
          <label htmlFor="none">No RGP</label>
        </div>
      </fieldset>
    </section>
  );
};

export default Step2;
