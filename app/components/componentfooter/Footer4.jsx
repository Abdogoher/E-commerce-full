import React from "react";
import Image from "next/image";

const Footer4 = () => {
  return (
    <div>
      <div className="w-full py-5">
        <div className="w-3/5 mx-auto flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-gray-400 text-[10px]">
              Copyright 2025 © All rights reserved by Blackrise Theme
            </h2>
          </div>
          <div className="flex items-center">
            <span className="text-gray-400 text-[10px]">Privacy Policy</span>
            <span className="text-gray-400 text-[10px] mx-2">
              Terms and Conditions
            </span>
            <span className="text-gray-400 text-[10px]">Cookie</span>
            <Image
              src="/assets/images/visa.png"
              width={320}
              height={28}
              alt="..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer4;
