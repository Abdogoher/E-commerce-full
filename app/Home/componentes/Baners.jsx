import { ArrowRight } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const Baners = () => {
  return (
    <div className="">
      <div className="flex gap-5 py-3">
        {/* image 1  */}
        <div className="relative">
          <div className="absolute px-4 md:px-14 py-2 md:py-20">
            <span className="text-[5px] md:text-[10px] font-medium mr-2">
              EXCLUSIVE OFFER
            </span>
            <span className="text-green-700 text-[6px] md:text-xs font-medium rounded-l-full rounded-r-full p-1 bg-gradient-to-r from-green-300  to-green-50">
              -20% OFF
            </span>
            <h2 className="text-xs md:text-4xl font-bold">
              Feed your family <br /> the best
            </h2>
            <p className="md:my-2 my-1 text-[6px] md:text-xs font-medium">
              Only this week. Don't miss...
            </p>
            <p className="text-[8px] md:text-xs  md:my-2">
              from{" "}
              <span className="text-xs md:text-2xl text-red-600">$7.99</span>
            </p>
            <button className="bggreen p-[2px] md:p-2 rounded-l-full rounded-r-full text-white">
              <Link href="/shop" className="flex text-[5px] md:text-xs">
                Shop Now{" "}
                <ArrowRight
                  size={16}
                  className="ml-[2px] md:ml-2 w-2 md:w-4 h-2 md:h-4"
                />
              </Link>
            </button>
          </div>
          <Image
            src="/assets/images/photo3.png"
            alt="..."
            width={770}
            height={505}
            className="rounded-lg"
          />
        </div>
        {/* image 2  */}
        <div>
          <Image
            src="/assets/images/happyday.jpg"
            alt="..."
            width={370}
            height={505}
            className="rounded-lg"
          />
        </div>
      </div>

      <div className="flex flex-row gap-5 py-3">
        {/* image 3  */}
        <div className="relative">
          <div className="absolute left-25 md:left-60 md:pt-10 pt-1">
            <p className="text-gray-400 text-[6px] md:text-sm">
              Everything id so fresh
            </p>
            <h2 className="text-[10px] md:text-2xl font-semibold mb-1">
              only in Bacola
            </h2>
            <p className="text-[4px] md:text-[10px] text-gray-400 mb-1 md:mb-4">
              Bacola Weekend Discount
            </p>
            <button className="bg-blue-900 rounded-l-full rounded-r-full text-white text-[6px] md:text-xs px-1 md:px-4 py-1/2 md:py-2">
              <Link href="/shop">Shop Now</Link>
            </button>
          </div>
          <Image
            src="/assets/images/photo1.png"
            alt="..."
            width={570}
            height={260}
            className="rounded-lg"
          />
        </div>
        {/* image 4  */}
        <div className="relative">
          <div className="absolute left-25 md:left-60 md:pt-10 pt-1">
            <p className="text-gray-400 text-[6px] md:text-sm">
              Everything id so fresh
            </p>
            <h2 className="text-[10px] md:text-2xl font-semibold mb-1">
              only in Bacola
            </h2>
            <p className="text-[4px] md:text-[10px] text-gray-400 mb-[2px] md:mb-4">
              Bacola Weekend Discount
            </p>
            <button className="bg-blue-900 rounded-l-full rounded-r-full text-white text-[6px] md:text-xs px-1 md:px-4 py-1/2 md:py-2">
              <Link href="/shop" >
                Shop Now
              </Link>
            </button>
          </div>
          <Image
            src="/assets/images/photo2.png"
            alt="..."
            width={570}
            height={260}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Baners
