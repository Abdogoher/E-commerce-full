import React from 'react'
import Link from 'next/link'
import { ChevronDown, Hand } from 'lucide-react'

const HeadNav = () => {
  return (
    <div>
      {/* side 1 */}
      <div> 
      <p className='text-center w-full bggreen text-xs py-2 text-white'>Due to current circumstances, there may be slight delays in order processing</p>
      </div>
      {/* side 2 */}
      <div className='container mx-auto flex md:justify-between items-middle text-xs md:text-sm py-1 gap-2 md:gap-0'>
       
        <div className='text-gray-500 grow-5'>
           {/* about  */}
          <Link href="/" >About Us</Link>
          {/* compare  */}
          <Link className='mx-2' href="/">Compare</Link>
          {/* wishlist  */}
          <Link href="/">Wishlist</Link>
        </div>
        {/* secure delivery */}
        <div className='text-gray-500 flex items-center grow-1'>
          <Hand className='mr-1' size={18} />
          <span className=' text-sm'> 100% Secure delivery without contacting the courier</span>
        </div>
          {/* contact */}
        <div className='grow-1'>
          <p className='text-gray-500'>Need help? Call Us: <span className='text-[#35AFA0]'> + 0020 500</span></p>
        </div>
        {/* language & currency */}
        <div className='flex text-gray-500 grow-1'>
          <div className='text-sm flex items-center '>English <ChevronDown size={13}/> </div>
          <div className='text-sm flex items-center'>USD <ChevronDown size={13}/> </div>
        </div>

      </div>
    </div>
  )
}

export default HeadNav
