import React from "react";
import Image from "next/image";
const Recentpostes = () => {
  return (
    <div>
      <h2 className="mb-1 md:mb-4 text-[8px] md:text-lg font-medium">
        RECENT POSTES
      </h2>
      <div className="p-1 md:p-4 rounde-2xl border border-gray-100">
        {/* post1 */}
        <div className="flex ">
          <Image
            src="/assets/images/Figure.png"
            alt="..."
            width={100}
            height={100}
            className="w-6 md:w-10 h-6 md:h-10"
          />
          <span className="inter text-[6px] md:text-xs pl-[2px] md:pl-2">
            But I must explain to you how all this mistaken idea
          </span>
        </div>

        {/* post2 */}
        <div className="flex py-2">
          <Image
            src="/assets/images/Figure1.png"
            alt="..."
            width={100}
            height={100}
            className="w-6 md:w-10 h-6 md:h-10"
          />
          <span className="inter text-[6px] md:text-xs pl-[2px] md:pl-2">
            But I must explain to you how all this mistaken idea
          </span>
        </div>

        {/* post3 */}
        <div className="flex">
          <Image
            src="/assets/images/Figure2.png"
            alt="..."
            width={100}
            height={100}
            className="w-6 md:w-10 h-6 md:h-10"
          />
          <span className="inter text-[6px] md:text-xs pl-[2px] md:pl-2">
            But I must explain to you how all this mistaken idea
          </span>
        </div>
      </div>
    </div>
  );
};

export default Recentpostes;
