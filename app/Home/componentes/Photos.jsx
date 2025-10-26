import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Photos = () => {
    return (
      <div className=" py-3 grid grid-cols-3 gap-5">
        {/* photo 1  */}
        <div className="relative  ">
          <div className="absolute py-2 md:py-8 px-2 md:px-10">
            <p className="text-green-500 text-[6px] md:text-xs">
              Weekend Discount 40%
            </p>
            <h3 className="text-[10px] md:text-xl font-semibold my-[2px] md:my-2">
              Natural Eggs
            </h3>
            <p className="text-gray-400 text-[6px] md:text-[10px]">
              Eat one every day
            </p>
            <button className="flex py-[2px] md:py-1 mt-1 md:mt-2 px-1 md:px-3 rounded-l-full rounded-r-full bg-gray-300 text-[6px] md:text-xs text-white cursor-pointer">
              <Link href="/shop">Shop Now</Link>
            </button>
          </div>
          <Image
            src="/assets/images/eggs.png"
            height={220}
            width={370}
            alt="..."
            className="rounded-lg"
          />
        </div>
        {/* photo 2  */}
        <div className="relative  ">
          <div className="absolute py-2 md:py-8 px-2 md:px-10">
            <p className="text-green-500 text-[6px] md:text-xs">
              Weekend Discount 40%
            </p>
            <h3 className="text-[10px] md:text-xl font-semibold my-[2px] md:my-2">
              Taste the Best
            </h3>
            <p className="text-gray-400 text-[6px] md:text-[10px]">
              Shine the morning
            </p>
            <button className="flex py-[2px] md:py-1 mt-1 md:mt-2 px-1 md:px-3 rounded-l-full rounded-r-full bg-gray-300 text-[6px] md:text-xs text-white cursor-pointer">
              <Link href="/shop">Shop Now</Link>
            </button>
          </div>
          <Image
            src="/assets/images/breads.png"
            height={220}
            width={370}
            alt="..."
            className="rounded-lg"
          />
        </div>
        {/* photo 3  */}
        <div className="relative  ">
          <div className="absolute py-2 md:py-8 px-2 md:px-10">
            <p className="text-green-500 text-[6px] md:text-xs">
              Weekend Discount 40%
            </p>
            <h3 className="text-[10px] md:text-xl font-semibold my-[2px] md:my-2">
              Ditch the Junk
            </h3>
            <p className="text-gray-400 text-[6px] md:text-[10px]">
              Breakfast made better
            </p>
            <button className="flex py-[2px] md:py-1 mt-1 md:mt-2 px-1 md:px-3 rounded-l-full rounded-r-full bg-gray-300 text-[6px] md:text-xs text-white cursor-pointer">
              <Link href="/shop">Shop Now</Link>
            </button>
          </div>
          <Image
            src="/assets/images/coffe.png"
            height={220}
            width={370}
            alt="..."
            className="rounded-lg"
          />
        </div>
      </div>
    );
}

export default Photos
