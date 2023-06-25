import Image from "next/image";
import i1 from "../public/images/dsc06992_final-100840399-orig.jpg";

const Slider1 = () => {
  return (
    <div className="relative h-full w-full">
      <Image
        src={i1}
        alt="Logo"
        style={{
          width: "100%",
          height: "100%",
        }}
        className="absolute"
      />
    </div>
  );
};

export default Slider1;
