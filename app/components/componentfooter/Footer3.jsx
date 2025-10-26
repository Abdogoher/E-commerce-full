import { Facebook, Instagram, PhoneCall, Twitter } from "lucide-react";
import Image from "next/image";
import React from "react";

const Footer3 = () => {
  return (
    <div className="flex justify-between w-full md:w-3/5 mx-auto py-2 md:py-8 border-b border-gray-300">
      {/* contact  */}
      <div className="flex justify-between">
        <div className="flex items-center">
          <PhoneCall
            size={40}
            className="p-[2px] md:p-2 rounded-full border border-gray-400 mr-1 md:mr-3 w-4 md:w-8 h-4 md:h-8"
          />
          <div>
            <h4 className="text-[6px] md:text-lg font-bold">8 800 555-55</h4>
            <p className="text-gray-400 text-[4px] md:text-xs">
              Working 8:00 - 22:00
            </p>
          </div>
        </div>
      </div>
      {/* download  */}
      <div className="flex">
        <div>
          <h6 className="text-[6px] md:text-lg font-semibold">
            Download App on Mobile :
          </h6>
          <p className="text-gray-400 text-[4px] md:text-sm">
            15% discount on your first purchase
          </p>
        </div>
        <Image
          src="/assets/images/googleplay.png"
          width={116}
          height={36}
          alt="..."
          className="mx-2 w-10 md:w-24 h-4 md:h-10"
        />
        <Image
          src="/assets/images/appstore.png"
          width={116}
          height={36}
          alt="..."
          className="w-10 md:w-24 h-4 md:h-10"
        />
        <div className="flex">
          <Facebook
            size={35}
            className="rounded-full border p-[2px] md:p-1 border-gray-400 text-[#35AFA0] ml-[2px] md:ml-2 w-4 md:w-8 h-4 md:h-8"
          />
          <Twitter
            size={35}
            className="rounded-full border p-[2px] md:p-1 border-gray-400 text-[#35AFA0] ml-[2px] md:ml-2 w-4 md:w-8 h-4 md:h-8"
          />
          <Instagram
            size={35}
            className="rounded-full border p-[2px] md:p-1 border-gray-400 text-[#35AFA0] ml-[2px] md:ml-2 w-4 md:w-8 h-4 md:h-8"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer3;
