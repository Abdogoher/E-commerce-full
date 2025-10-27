import React from 'react'
import Image from 'next/image'

const Widgetbnner = () => {
  return (
    <div className="p-1 md:p-4">
      <p className="text-[6px] md:text-sm font-medium mb-1 md:mb-3">
        WIDGET BANNER
      </p>
      <Image
        src="/assets/images/happyday.jpg"
        alt="..."
        width={270}
        height={405}
      />
    </div>
  );
}

export default Widgetbnner
