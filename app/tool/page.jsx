"use client";

import Link from "next/link";
import React from "react";
import Step1 from "@components/tool/Step1";
import Step2 from "@components/tool/Step2";
import Step3 from "@components/tool/Step3";
import Result from "@components/tool/Result";

const page = () => {
  const [data, setData] = React.useState({
    budget: 500,
    fps: 60,
    resolution: 0,
    gameType: null,
    formFactor: "m-atx",
    purpose: null,
    theme: "dark",
    RGP: false,
  });
  function changeValue(event) {
    const { name, value, type, checked } = event.target;
    setData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function nextStep(e) {
    e.preventDefault();
    if (steps < 4) {
      setSteps((prev) => prev + 1);
    }
    console.log(data);
  }

  const [steps, setSteps] = React.useState(1);
  const step1color = steps === 1 ? "#fe8540" : "#df6472";
  const step2color =
    steps >= 2 ? (steps === 2 ? "#fe8540" : "#df6472") : "#dfe3fb";
  const step3color =
    steps >= 3 ? (steps === 3 ? "#fe8540" : "#df6472") : "#dfe3fb";

  return (
    <div className="container m-auto">
      <h1 className="text-3xl font-bold lg:text-5xl">
        Build your PC with{" "}
        <span className="from-compt-gred bg-gradient-to-r bg-clip-text text-transparent">
          Computerizer
        </span>
        !
      </h1>
      <div className="mb-10 mt-20 flex items-center justify-between px-10 text-xl font-bold lg:justify-center lg:gap-20">
        <dvi
          className="rounded-full p-4"
          style={{ backgroundColor: `${step1color}` }}
        >
          1
        </dvi>
        <dvi
          className="rounded-full p-4"
          style={{ backgroundColor: `${step2color}` }}
        >
          2
        </dvi>
        <dvi
          className="rounded-full p-4"
          style={{ backgroundColor: `${step3color}` }}
        >
          3
        </dvi>
      </div>
      <form action="/" className="rounded-xl bg-textDark p-5">
        {steps === 1 && <Step1 data={data} change={changeValue} />}
        {steps === 2 && <Step2 data={data} change={changeValue} />}
        {steps === 3 && <Step3 data={data} change={changeValue} />}
        {steps === 4 && <Result data={data} />}

        {steps !== 4 && <button onClick={nextStep}>Next</button>}
      </form>
    </div>
  );
};

export default page;
