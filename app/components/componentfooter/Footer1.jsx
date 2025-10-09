import React from "react";
import { Mail, Search } from "lucide-react";
import Image from "next/image";

const Footer1 = () => {
  return (
    <div className="w-full bggreen">
      <div className="flex justify-between w-2/3 mx-auto">
        <div className="py-10">
          <h3 className="text-white/70 text-sm">
            <span className="underline">$20 discount </span>for your first order
          </h3>
          <h3 className="text-white text-2xl my-2">
            Join our newsletter and get...
          </h3>
          <p className="text-white/70 text-xs decoration-1">
            Join our email subscription now to get updates <br /> on promotions
            and coupons.
          </p>
          <div className="relative w-full md:w-[200px] lg:w-[400px] mt-4">
            <button className="absolute right-3 top-5 -translate-y-1/2 text-gray-600 bggreen py-2 px-1 rounded text-xs">
              Subscribe
            </button>
            <input
              type="email"
              placeholder="Your email address"
              className="pl-9 py-3  bg-gray-200 rounded w-full text-sm "
            />
            <Mail
              className="absolute left-3 top-5 -translate-y-1/2 text-gray-500"
              size={18}
            />
          </div>
        </div>
        <div>
          <Image
            src="/assets/images/logofooter.png"
            width={450}
            height={200}
            alt="Logofooter"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer1;
