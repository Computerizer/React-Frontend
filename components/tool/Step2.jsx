"use client";

const Step2 = ({ change, data }) => {
  return (
    <section className="lg:flex lg:justify-between">
      <label htmlFor="fps" className="text-lg font-bold">
        fPS (Hz): {data.fps}
      </label>
      <input
        type="range"
        className="w-full border-none lg:w-3/4"
        min="60"
        max="240"
        step="5"
        value={data.fps}
        onChange={change}
        id="fps"
        name="fps"
      />
      <label htmlFor="resolution">What is your favorite color?</label>
      <br />
      <select
        id="resolution"
        value={data.resolution}
        onChange={change}
        name="resolution"
      >
        <option value="1">HD</option>
        <option value="2">2K</option>
        <option value="4">4K</option>
        <option value="8">8K</option>
      </select>
    </section>
  );
};

export default Step2;
