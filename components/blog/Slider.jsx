import Link from "next/link";
import Image from "next/image";
import i1 from "@public/images/img1.jpg";

const slider = () => {
  return (
    <div className="m-5 overflow-hidden rounded-xl border">
      <Image
        src={i1}
        alt="Logo"
        style={{
          width: "100%",
        }}
      />
      <div className="flex flex-col gap-3 p-3">
        <h3 className="ml-2 text-prime2">/ review</h3>
        <h2 className="text-3xl font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolore
          maiores hic cum consequatur voluptate eaque illo quisquam. Vero,
          numquam!
        </p>
        <div className="flex items-center gap-2">
          <Image src={i1} alt="Logo" className="h-10 w-10 rounded-full" />
          <div>
            <p className="font-semibold">Author Name</p>
            <p>30 june 2023 / 2 min ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default slider;
