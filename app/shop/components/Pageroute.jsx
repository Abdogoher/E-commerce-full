import { ChevronRight } from 'lucide-react';
import Link from 'next/link'
import React from 'react'


const Pageroute = () => {
  return (
    <div className="w-full pb-2 md:pb-4 flex">
      <Link href="/" className="font-medium text-[8px] md:text-sm">
        Home
      </Link>

      <span className="text-gray-500 flex items-center text-[6px] md:text-xs">
        <ChevronRight size={16} className='w-2 md:w-4 md:h-4 h-2'/> Products
      </span>
    </div>
  );
}

export default Pageroute
