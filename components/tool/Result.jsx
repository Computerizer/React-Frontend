const Result = ({ data }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold lg:text-5xl">
        Congrats for your first Computer!!
      </h1>
      <h3 className="text-xl">Budget: {data.budget}</h3>
      <h3 className="text-xl">FPS: {data.fps}</h3>
      <h3 className="text-xl">formFactor: {data.formFactor}</h3>
      <h3 className="text-xl">Theme: {data.theme}</h3>
      <h3 className="text-xl">RGP: {data.RGP ? "True" : "False"}</h3>
    </div>
  );
};

export default Result;
