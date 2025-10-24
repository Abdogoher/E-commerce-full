import {
  SoapDispenserDroplet,
  ChevronDown,
  TextAlignJustify,
  FireExtinguisher,
  Armchair,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const BottomNav = () => {
  return (
    <div className="container flex justify-between items-center mx-auto ">
      {/* button all product  */}
      <div className="relative">
        <button className=" bggreen flex items-center py-1 md:py-2 px-2 md:px-3 rounded-l-full rounded-r-full text-xs md:text-sm text-white">
          <TextAlignJustify size={15} />
          <p className="mx-1 text-[8px] md:text-[12px]">All Products</p>
          <ChevronDown size={15} />
        </button>
        <span className="absolute text-[6px] md:text-[10px] text-gray-600 bg-gray-200 rounded-l-full rounded-r-full px-1 -bottom-1.5 left-7">
          all products 55{" "}
        </span>
      </div>
      {/* Links  */}

      <div className="flex items-center justify-between gap-1 text-sm">
        <Link
          href="/"
          className="relative px-1 md:px-2 py-1 text-[10px] md:text-[16px] md:text-md text-[#35AFA0] bg-[#35afa131] rounded-l-full rounded-r-full flex items-center "
        >
          Home <ChevronDown size={15} />
          {/* <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#35AFA0] transition-all duration-300 group-hover:w-full"></span> */}
        </Link>

        <Link
          href="/shop"
          className="relative text-[10px] md:text-[16px] px-1 md:px-2 text-gray-700 font-medium hover:text-[#35AFA0] transition duration-300 group"
        >
          Shop
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#35AFA0] transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link
          href="/shop"
          className="relative text-[10px] md:text-[16px] px-1 md:px-2 py-2 text-gray-700 font-medium hover:text-[#35AFA0] transition duration-300 group flex"
        >
          <SoapDispenserDroplet
            className="mr-1 w-3 md:w-4 h-3 md:h-6"
            size={20}
          />
          Beauty
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#35AFA0] transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link
          href="/shop"
          className="relative text-[10px] md:text-[16px] px-1 md:px-2 py-2 text-gray-700 font-medium hover:text-[#35AFA0] transition duration-300 group flex"
        >
          <FireExtinguisher
            className="mr-1 w-3 md:w-4 h-3 md:h-6"
            size={20}
            strokeWidth="1.5px"
          />{" "}
          Fragrances
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#35AFA0] transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link
          href="/shop"
          className="relative text-[10px] md:text-[16px] px-1 md:px-2 py-2 text-gray-700 font-medium hover:text-[#35AFA0] transition duration-300 group flex"
        >
          <Armchair
            className="mr-1 w-3 md:w-4 h-3 md:h-6"
            size={20}
            strokeWidth="1.5px"
          />
          Furniture
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#35AFA0] transition-all duration-300 group-hover:w-full"></span>
        </Link>

        <Link
          href="/about"
          className="relative text-[10px] md:text-[16px] px-1 md:px-2 py-2 text-gray-700 font-medium hover:text-[#35AFA0] transition duration-300 group"
        >
          About
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#35AFA0] transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link
          href="/blog"
          className="relative text-[10px] md:text-[16px] px-1 md:px-2 py-2 text-gray-700 font-medium hover:text-[#35AFA0] transition duration-300 group"
        >
          Blog
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#35AFA0] transition-all duration-300 group-hover:w-full"></span>
        </Link>

        <Link
          href="/contact"
          className="relative text-[10px] md:text-[16px] px-1 md:px-2 py-2 text-gray-700 font-medium hover:text-[#35AFA0] transition duration-300 group"
        >
          Contact
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#35AFA0] transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </div>
    </div>
  );
};

export default BottomNav;
