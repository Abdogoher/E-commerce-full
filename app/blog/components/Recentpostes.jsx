import React from "react";
import Image from "next/image";
const Recentpostes = () => {
  return (

    <div>
      <h2 className="mb-4 font-medium">RECENT POSTES</h2>
      <div className="p-4 rounde-2xl border border-gray-100">
      {/* post1 */}
      <div className="flex ">
        <Image src="/assets/images/Figure.png" alt="..." width={100} height={100} />
        <span className="inter text-xs pl-2">But I must explain to you how all this mistaken idea</span>
      </div>

      {/* post2 */}
      <div className="flex py-2">
        <Image src="/assets/images/Figure1.png" alt="..." width={100} height={100} />
        <span className="inter text-xs pl-2">But I must explain to you how all this mistaken idea</span>
      </div>

      {/* post3 */}
      <div className="flex">
        <Image src="/assets/images/Figure2.png" alt="..." width={100} height={100} />
        <span className="inter text-xs pl-2">But I must explain to you how all this mistaken idea</span>
      </div>
    </div>
    </div>
  );
};

export default Recentpostes;
