import { ArrowRight } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const Baners = () => {
  return (
    <div className="w-3/5 mx-auto ">
      <div className="flex flex-col md:flex-row gap-5 py-3">
        {/* image 1  */}
        <div className="relative">
          <div className="absolute px-14 py-20">
            <span className="text-[10px] font-medium mr-2">
              EXCLUSIVE OFFER
            </span>
            <span className="text-green-700 text-xs font-medium rounded-l-full rounded-r-full p-1 bg-gradient-to-r from-green-300  to-green-50">
              -20% OFF
            </span>
            <h2 className="text-4xl font-bold">
              Feed your family <br /> the best
            </h2>
            <p className="my-2 text-xs font-medium">
              Only this week. Don't miss...
            </p>
            <p className="text-xs my-2">
              from <span className="text-2xl text-red-600">$7.99</span>
            </p>
            <button className="bggreen p-2 rounded-l-full rounded-r-full text-white">
              <Link href="/shop" className="flex text-xs">
                Shop Now <ArrowRight size={16} className="ml-2" />
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

      <div className="flex flex-col md:flex-row gap-5 py-3">
        {/* image 3  */}
        <div className="relative">
          <div className="absolute left-60 pt-10">
            <p className="text-gray-400">Everything id so fresh</p>
            <h2 className="text-2xl font-semibold mb-1">only in Bacola</h2>
            <p className="text-[10px] text-gray-400 mb-4">
              Bacola Weekend Discount
            </p>
            <button className="bg-blue-900 px-4 py-1/2 rounded-l-full rounded-r-full text-white">
              <Link href="/shop" className="text-xs">
                Shop Now
              </Link>
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
        <div className='relative'>
          <div className="absolute left-60 pt-10">
            <p className="text-gray-400">Everything id so fresh</p>
            <h2 className="text-2xl font-semibold mb-1">only in Bacola</h2>
            <p className="text-[10px] text-gray-400 mb-4">
              Bacola Weekend Discount
            </p>
            <button className="bg-blue-900 px-4 py-1/2 rounded-l-full rounded-r-full text-white">
              <Link href="/shop" className="text-xs">
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
