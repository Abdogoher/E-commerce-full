import React from "react";
import Image from "next/image";

const Footer4 = () => {
  return (
    <div>
      <div className="w-full py-2 md:py-5">
        <div className="w-full md:w-3/5 mx-auto flex px-1 justify-between items-center">
          <div>
            <h2 className="text-gray-400 text-[4px] md:text-[10px]">
              Copyright 2025 © All rights reserved by Blackrise Theme
            </h2>
          </div>
          <div className="flex items-center">
            <span className="text-gray-400 text-[4px] md:text-[10px]">Privacy Policy</span>
            <span className="text-gray-400 text-[4px] md:text-[10px] mx-2">
              Terms and Conditions
            </span>
            <span className="text-gray-400 text-[4px] md:text-[10px]">Cookie</span>
            <Image
              src="/assets/images/visa.png"
              width={320}
              height={28}
              alt="..."
              className="w-30 md:w-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer4;
