import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="container mx-auto mt-10 flex flex-col gap-8 border-t-2 p-5 lg:flex-row lg:justify-between lg:gap-5 lg:px-0">
      <div className="flex flex-col gap-8 lg:w-1/2 lg:p-10">
        <p className="text-3xl ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque sunt
          sequi modi dolor voluptate id, hic rem sint?
        </p>
        <div className="flex w-full justify-between px-5">
          <Link href="/">
            <Image
              src="/icons/instagram.svg"
              alt="Logo"
              width={30}
              height={30}
            />
          </Link>
          <Link href="/">
            <Image
              src="/icons/linkedin.svg"
              alt="Logo"
              width={30}
              height={30}
            />
          </Link>
          <Link href="/">
            <Image
              src="/icons/square-facebook.svg"
              alt="Logo"
              width={30}
              height={30}
            />
          </Link>
          <Link href="/">
            <Image
              src="/icons/square-github.svg"
              alt="Logo"
              width={30}
              height={30}
            />
          </Link>
          <Link href="/">
            <Image
              src="/icons/square-reddit.svg"
              alt="Logo"
              width={30}
              height={30}
            />
          </Link>
          <Link href="/">
            <Image
              src="/icons/square-twitter.svg"
              alt="Logo"
              width={30}
              height={30}
            />
          </Link>
        </div>
        <Link href="/" className="text-xl">
          support@computerizer.com
        </Link>
      </div>
      <div className="flex flex-col gap-8 lg:w-1/2 lg:justify-end lg:gap-16 lg:p-10">
        <div className="flex flex-col gap-2">
          <form action="">
            <label for="email-sub">Subscribe and get news</label>
            <input
              type="email"
              name="email-sub"
              id="email"
              placeholder="Email"
              className="mt-2 w-full rounded-lg border border-black px-3 py-2"
            />
          </form>
          <div className="flex w-full justify-between px-5 text-center text-sm">
            <Link
              href="/"
              className="underline decoration-black decoration-solid decoration-1 underline-offset-1"
            >
              Privacy Policy
            </Link>
            <Link
              href="/"
              className="underline decoration-black decoration-solid decoration-1 underline-offset-1"
            >
              Terms of Services
            </Link>
            <Link
              href="/"
              className="underline decoration-black decoration-solid decoration-1 underline-offset-1"
            >
              Language
            </Link>
          </div>
        </div>

        <p className="w-full text-center">@ 2023 Computerizer</p>
      </div>
    </footer>
  );
};

export default Footer;
