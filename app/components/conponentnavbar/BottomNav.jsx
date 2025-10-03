import {
  Beef,
  ChevronDown,
  Coffee,
  Croissant,
  TextAlignJustify,
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
          <p className="mx-1">All Products</p>
          <ChevronDown size={15} />
        </button>
        <span className="absolute text-[10px] text-gray-600 bg-gray-200 rounded-l-full rounded-r-full px-1 -bottom-1.5 left-7">
          all products 55{" "}
        </span>
      </div>
      {/* Links  */}

      <div className="flex flex-col md:flex-row items-center justify-between gap-1 text-sm">
        <Link
          href="/"
          className="relative px-2 py-2 text-[#35AFA0] bg-[#35afa131] rounded-l-full rounded-r-full flex items-center "
        >
          Home <ChevronDown size={15} />
          {/* <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#35AFA0] transition-all duration-300 group-hover:w-full"></span> */}
        </Link>

        <Link
          href="/shop"
          className="relative px-2  hover:text-[#35AFA0] transition duration-300 group"
        >
          Shop
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#35AFA0] transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link
          href="/shop"
          className="relative px-4 py-2 text-gray-700 font-medium hover:text-[#35AFA0] transition duration-300 group flex"
        >
          <Beef className="mr-1" size={20} strokeWidth="1.5px" /> MEATS&SEAFOOD
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#35AFA0] transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link
          href="/shop"
          className="relative px-4 py-2 text-gray-700 font-medium hover:text-[#35AFA0] transition duration-300 group flex"
        >
          <Croissant className="mr-1" size={20} strokeWidth="1.5px" /> BAKERY
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#35AFA0] transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link
          href="/shop"
          className="relative px-4 py-2 text-gray-700 font-medium hover:text-[#35AFA0] transition duration-300 group flex"
        >
          <Coffee className="mr-1" size={20} strokeWidth="1.5px" /> BEVERAGES
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#35AFA0] transition-all duration-300 group-hover:w-full"></span>
        </Link>

        <Link
          href="/about"
          className="relative px-4 py-2 text-gray-700 font-medium hover:text-[#35AFA0] transition duration-300 group"
        >
          About
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#35AFA0] transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link
          href="/blog"
          className="relative px-4 py-2 text-gray-700 font-medium hover:text-[#35AFA0] transition duration-300 group"
        >
          Blog
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#35AFA0] transition-all duration-300 group-hover:w-full"></span>
        </Link>

        <Link
          href="/contact"
          className="relative px-4 py-2 text-gray-700 font-medium hover:text-[#35AFA0] transition duration-300 group"
        >
          Contact
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#35AFA0] transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </div>
    </div>
  );
};

export default BottomNav;
