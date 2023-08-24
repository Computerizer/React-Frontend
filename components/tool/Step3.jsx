"use client";

const Step2 = ({ change, data }) => {
  return (
    <section className="lg:flex lg:justify-between">
      <label htmlFor="formFactor">What is your favorite color?</label>
      <br />
      <select
        id="formFactor"
        value={data.resolution}
        onChange={change}
        name="formFactor"
      >
        <option value="m-atx">Micro-ATX</option>
        <option value="atx">ATX</option>
      </select>
      <label htmlFor="theme">What is your favorite color?</label>
      <br />
      <select id="theme" value={data.resolution} onChange={change} name="theme">
        <option value="dark">Dark</option>
        <option value="white">White</option>
      </select>
      <fieldset>
        <legend>RGP or Not?</legend>
        <input
          type="radio"
          id="RGP"
          name="RGP"
          value={true}
          checked={data.RGP}
          onChange={change}
        />
        <label htmlFor="RGP">RGP</label>
        <input
          type="radio"
          id="RGP"
          name="RGP"
          value={false}
          checked={data.RGP}
          onChange={change}
        />
        <label htmlFor="none">no RGP</label>
      </fieldset>
    </section>
  );
};

export default Step2;
