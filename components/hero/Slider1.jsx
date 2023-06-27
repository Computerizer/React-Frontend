import Image from "next/image";
import i1 from "@public/images/img4.avif";

const Slider1 = () => {
  return (
    <div className="h-full w-full">
      <Image
        src={i1}
        alt="Logo"
        style={{
          width: "100%",
          height: "auto",
        }}
        className=""
      />
    </div>
  );
};

export default Slider1;
