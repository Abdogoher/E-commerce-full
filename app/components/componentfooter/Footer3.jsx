import { Facebook, Instagram, PhoneCall, Twitter } from "lucide-react";
import Image from "next/image";
import React from "react";

const Footer3 = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between w-3/5 mx-auto py-8 border-b border-gray-300">
      {/* contact  */}
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex items-center">
          <PhoneCall
            size={40}
            className="p-2 rounded-full border border-gray-400 mr-3"
          />
          <div>
            <h4 className="text-lg font-bold">8 800 555-55</h4>
            <p className="text-gray-400 text-xs">Working 8:00 - 22:00</p>
          </div>
        </div>
      </div>
      {/* download  */}
      <div className="flex">
        <div>
          <h6 className="text-md font-semibold">Download App on Mobile :</h6>
          <p className="text-gray-400 text-xs">
            15% discount on your first purchase
          </p>
        </div>
        <Image
          src="/assets/images/googleplay.png"
          width={116}
          height={36}
          alt="..."
          className="mx-2"
        />
        <Image
          src="/assets/images/appstore.png"
          width={116}
          height={36}
          alt="..."
        />
        <div className="flex">
          <Facebook
            size={35}
            className="rounded-full border p-1 border-gray-400 text-[#35AFA0] ml-2"
          />
          <Twitter
            size={35}
            className="rounded-full border p-1 border-gray-400 text-[#35AFA0] ml-2"
          />
          <Instagram
            size={35}
            className="rounded-full border p-1 border-gray-400 text-[#35AFA0] ml-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer3;
