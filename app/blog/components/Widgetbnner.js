import React from 'react'
import Image from 'next/image'

const Widgetbnner = () => {
  return (
    <div className="p-4">
      <p className='text-sm font-medium mb-3'>WIDGET BANNER</p>
      <Image src="/assets/images/sidebar-banner.gif.jpg" alt="..." width={270} height={405} />
    </div>
  );
}

export default Widgetbnner
