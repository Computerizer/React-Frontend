"use client";

import Image from "next/image";
import Link from "next/link";
import i1 from "@public/images/amd-r7-cpu.png";
import i2 from "@public/images/water-cooler.png";
import i3 from "@public/images/ram.png";
import i4 from "@public/images/case.png";
import i5 from "@public/images/rtx-gpu.png";

const PartsGrid = () => {
  const photoWidth = "80%";

  return (
    <section className="p-5 pt-20">
      <h1 className="mb-10 text-center text-5xl font-bold">
        Deals of the Week
      </h1>
      <div className="lg:grid-row-3 grid gap-5 lg:auto-rows-min lg:grid-cols-3">
        <Link href="/" className="card text-center lg:row-span-2" id="cpu">
          <Image
            src={i1}
            alt="Logo"
            style={{
              width: photoWidth,
            }}
          />
          <h3 className="text-2xl font-semibold">CPU</h3>
          <p>AMD Ryzen 7 5800x</p>
        </Link>
        <Link href="/" className="card text-center" id="cooler">
          <Image
            src={i2}
            alt="Logo"
            style={{
              width: photoWidth,
            }}
          />
          <h3 className="text-2xl font-semibold lg:col-start-2">Cooler</h3>
          <p>Cooler Master MasterLiquid PL360</p>
        </Link>
        <Link href="/" className="card text-center lg:col-start-2" id="ram">
          <Image
            src={i3}
            alt="ram-photo"
            style={{
              width: photoWidth,
            }}
          />
          <h3 className="text-2xl font-semibold">RAM</h3>
          <p>Very Fast 400Mhz RAM</p>
        </Link>
        <Link
          href="/"
          className="card text-center lg:col-start-3 lg:row-span-3 lg:row-start-1"
          id="case"
        >
          <Image
            src={i4}
            alt="Case photo"
            style={{
              width: photoWidth,
            }}
          />
          <h3 className="text-2xl font-semibold">Cooler</h3>
          <p>Nzxt cool white case</p>
        </Link>
        <Link href="/" className="card text-center lg:col-span-2" id="gpu">
          <Image
            src={i5}
            alt="gpu photo"
            style={{
              width: photoWidth,
            }}
          />
          <h3 className="text-2xl font-semibold">Cooler</h3>
          <p>Nvedia RTX 4080ti</p>
        </Link>
      </div>
    </section>
  );
};

export default PartsGrid;
