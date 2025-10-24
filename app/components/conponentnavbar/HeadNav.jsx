import React from 'react'
import Link from 'next/link'
import { Hand } from 'lucide-react'

const HeadNav = () => {
  return (
    <div>
      {/* side 1 */}
      <div>
        <p className="text-center w-full bggreen text-[10px] md:text-xs py-1 md:py-2 text-white">
          Due to current circumstances, there may be slight delays in order
          processing
        </p>
      </div>
      {/* side 2 */}
      <div className="container mx-auto flex flex-wrap md:flex-nowrap md:justify-between items-center text-[10px] md:text-sm py-1 gap-0 md:gap-2">
        {/* about / compare / wishlist */}
        <div className="text-gray-500 grow-5">
          <Link href="/">About Us</Link>
          <Link className="mx-2" href="/">
            Compare
          </Link>
          <Link href="/">Wishlist</Link>
        </div>
        {/* secure delivery */}
        <div className="text-gray-500 flex items-center grow-1">
          <Hand className="md:w-6 w-3 mr-1" size={18} />
          <span className="text-[10px] md:text-sm">
            {" "}
            100% Secure delivery without contacting the courier
          </span>
        </div>
        {/* contact */}
        <div className="grow-1">
          <p className="text-gray-500">
            Need help? Call Us:{" "}
            <span className="text-[#35AFA0]"> + 0020 500</span>
          </p>
        </div>
        {/* language & currency */}
        <div className="flex text-gray-500 grow-1">
          <select>
            <option>English</option>
          </select>
          <select>
            <option>USD</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default HeadNav
