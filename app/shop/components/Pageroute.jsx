import { ChevronRight } from 'lucide-react';
import Link from 'next/link'
import React from 'react'


const Pageroute = () => {
  return (
    <div className="w-full pb-4 flex">
      <Link href="/" className="font-medium text-sm">
        Home
      </Link>

      <span className="text-gray-500 flex items-center text-xs">
        <ChevronRight size={16} /> Products
      </span>
    </div>
  );
}

export default Pageroute
