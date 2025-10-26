import React from "react";
import Image from "next/image";

const Article1 = () => {
  return (
    <div className="mt-10">
      {/* image article */}
      <Image
        src="/assets/images/blog-5.jpg.png"
        alt="..."
        width={855}
        height={600}
        className="w-full rounded"
      />
      {/* article body */}
      <div className="">
        <p className="text-gray-400 text-[6px] md:text-xs py-1 md:py-4">
          GROCERY
        </p>
        <h2 className="text-xs md:text-4xl font-semibold pr-4 inter">
          The Problem With Typefaces on the Web
        </h2>
        <div className="py-[1px] md:py-2">
          <span className="text-gray-400 text-[6px] text-xs mr-[2px] md:mr-1">
            jan 13 2025
          </span>{" "}
          <span className="text-[8px] md:text-sm">Sinan ISIK</span>
        </div>
        <p className="mt-2 md:mt-4 text-[8px] md:text-xs inter">
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
