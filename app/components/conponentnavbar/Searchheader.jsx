import React from "react";
import Image from "next/image";
import { Handbag, Search, User } from "lucide-react";
import BottomNav from "./BottomNav";

const searchheader = () => {
  return (
    <div className="border w-full border-gray-200 py-4 ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* logo div  */}
        <div className="text-center md:text-left">
          <div className="flex items-center">
            {/* Logo */}
            <Image
              src="/assets/images/Logo.png"
              width={60}
              height={60}
              alt="Logo"
            />
            <span className="text-[#35AFA0] text-lg">Double-A</span>
          </div>
          <span className="text-[10px] text-gray-500 ">
            Online Grocery Shopping Center
          </span>
        </div>
        {/* search div  */}
        <div className="relative w-full md:w-[600px] lg:w-[800px]">
          <Search
            className="absolute right-3 top-5 -translate-y-1/2 text-gray-600"
            size={20}
          />
          <input
            type="search"
            placeholder="search for Products, Fruits, meat, eggs, etc..."
            className="px-5 py-3  bg-gray-200 rounded w-full text-sm "
          />
        </div>

        {/* user div  */}
        <div className="flex items-center">
          <User className="bg-gray-200 rounded-full p-1" size={30} />
          <span className="mx-4 text-lg">$0.00</span>
          {/* cart  */}
          <div className="relative cursor-pointer">
            <span className="bg-[#EA2B0F] text-white right-0 absolute -top-1  rounded-full px-1 text-xs">
              0
            </span>
            <Handbag
              className="rounded-full bg-red-300 p-1 text-[#EA2B0F]"
              size={30}
            />
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default searchheader;
