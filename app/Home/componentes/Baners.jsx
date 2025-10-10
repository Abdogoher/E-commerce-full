import Image from 'next/image'
import React from 'react'

const Baners = () => {
  return (
    <div className="w-3/5 mx-auto ">
      <div className="flex flex-col md:flex-row gap-5 py-3">
        <Image
          src="/assets/images/slideshow-section.png"
          alt="..."
          width={770}
          height={505}
          className="rounded-lg"
        />
        <Image
          src="/assets/images/sidebar-banner.gif.png"
          alt="..."
          width={370}
          height={505}
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-5 py-3">
        <Image
          src="/assets/images/Container.png"
          alt="..."
          width={570}
          height={260}
          className="rounded-lg"
        />
        <Image
          src="/assets/images/Container1.png"
          alt="..."
          width={570}
          height={260}
          className="rounded-lg"
        />
      </div>
    </div>
  );
}

export default Baners
