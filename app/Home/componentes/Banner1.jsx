import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner1 = () => {
  return (
    <div className="mx-auto w-3/5 bg-[#F8EFEA] px-8 py-10 rounded-xl overflow-hidden">
      <div className="flex justify-between items-center relative">
        <div>
          <p className="text-md text-green-500">
            <span className="font-semibold">100% secure delivre</span> without
            contacting the courier{" "}
          </p>
        </div>
        <div className=" ">
          <Image
            src="/assets/images/banner0.png"
            alt="..."
            height={230}
            width={320}
            className="absolute -top-20 left-1/2 "
          />
        </div>
        <div>
          <button className="bg-green-500 text-white text-xs px-4 py-2 rounded-l-full rounded-r-full ">
            <Link href="/shop">Shop Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner1;
