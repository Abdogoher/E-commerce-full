import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Photos = () => {
    return (
      <div className="w-3/5 mx-auto py-3 grid grid-cols-3 gap-5">
        {/* photo 1  */}
        <div className="relative  ">
          <div className="absolute py-8 px-10">
            <p className="text-green-500 text-xs">Weekend Discount 40%</p>
            <h3 className="text-xl font-semibold my-2">Natural Eggs</h3>
            <p className="text-gray-400  text-[10px]">Eat one every day</p>
            <button className="flex py-1 mt-2 px-3 rounded-l-full rounded-r-full bg-gray-300 text-xs text-white cursor-pointer">
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
          <div className="absolute py-8 px-10">
            <p className="text-green-500 text-xs">Weekend Discount 40%</p>
            <h3 className="text-xl font-semibold my-2">Taste the Best</h3>
            <p className="text-gray-400  text-[10px]">Shine the morning</p>
            <button className="flex py-1 mt-2 px-3 rounded-l-full rounded-r-full bg-gray-300 text-xs text-white cursor-pointer">
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
          <div className="absolute py-8 px-10">
            <p className="text-green-500 text-xs">Weekend Discount 40%</p>
            <h3 className="text-xl font-semibold my-2">Ditch the Junk</h3>
            <p className="text-gray-400  text-[10px]">Breakfast made better</p>
            <button className="flex py-1 mt-2 px-3 rounded-l-full rounded-r-full bg-gray-300 text-xs text-white cursor-pointer">
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
