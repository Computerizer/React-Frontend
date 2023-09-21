"use client";

const Step2 = ({ change, data }) => {
  return (
    <section className="gap-4 lg:flex lg:flex-col lg:justify-between">
      <div className="flex w-full gap-2">
        <label htmlFor="fps" className="text-xl font-bold lg:text-3xl">
          fPS (Hz): {data.fps}
        </label>
        <input
          type="range"
          className="border-none lg:w-3/4"
          min="60"
          max="240"
          step="5"
          value={data.fps}
          onChange={change}
          id="fps"
          name="fps"
        />
      </div>
      <div>
        <label htmlFor="resolution">What is your favorite color?</label>
        <br />
        <select
          id="resolution"
          value={data.resolution}
          onChange={change}
          name="resolution"
          className="rounded-xl bg-prime1 px-6 py-2 text-white"
        >
          <option value="1">HD</option>
          <option value="2">2K</option>
          <option value="4">4K</option>
          <option value="8">8K</option>
        </select>
      </div>
    </section>
  );
};

export default Step2;
