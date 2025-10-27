import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner1 = () => {
  return (
    <div className=" bg-[#F8EFEA] px-2 md:px-8 py-3 md:py-10 rounded-xl overflow-hidden">
      <div className="flex justify-between items-center relative">
        <div>
          <p className="text-[6px] md:text-lg text-green-500">
            <span className="font-semibold">100% secure delivre</span> without
            contacting the courier{" "}
          </p>
        </div>
        <div>
          <Image
            src="/assets/images/banner0.png"
            alt="..."
            height={230}
            width={320}
            className="absolute -top-10 md:-top-20 left-40 md:left-1/2 w-36 md:w-80 h-32 md:h-60 "
          />
        </div>
        <div>
          <button className="bg-green-500 text-white text-[6px] md:text-xs px-2 md:px-4 py-1 md:py-2 rounded-l-full rounded-r-full ">
            <Link href="/shop">Shop Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner1;
