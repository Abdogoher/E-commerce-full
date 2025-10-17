import React from "react";
import Image from "next/image";

const Article1 = () => {
  return (
    <div className="">
      {/* image article */}
      <Image
        src="/assets/images/blog-3.jpg.png"
        alt="..."
        width={855}
        height={600}
        className="w-full rounded"
      />
      {/* article body */}
      <div className="">
        <p className="text-gray-400 text-xs py-4">GROCERY</p>
        <h2 className="text-4xl font-semibold pr-4 inter">
          But I must explain to you how all this mistaken idea
        </h2>
        <div className="py-2">
          <span className="text-gray-400 text-xs mr-1-">jan 13 2025</span> <span className="text-sm">Sinan ISIK</span>
        </div>
        <p className="mt-4 text-xs inter">
          Donec rhoncus quis diam sit amet faucibus. Vivamus pellentesque, sem
          sed convallis ultricies, ante eros laoreet libero, vitae suscipit
          lorem turpis sit amet lectus. Quisque egestas lorem ut mauris
          ultrices,...
        </p>
      </div>
    </div>
  );
};

export default Article1;
