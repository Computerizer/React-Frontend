import Image from "next/image";
import i1 from "@public/images/img1.jpg";

const PartCard = ({ part }) => {
  let price = 350;
  return (
    <div className="my-2 flex w-full justify-between">
      <div className="flex gap-2">
        <Image
          src={i1}
          alt="Logo"
          style={{
            width: "60px",
          }}
          className="rounded-lg"
        />
        <a href={part.website}>
          <h4 className="font-bold">{part.name}</h4>
          <p>
            Price: <span>{part.adress.suite.slice(-3)}$</span>
          </p>
        </a>
      </div>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="ml-auto h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default PartCard;
