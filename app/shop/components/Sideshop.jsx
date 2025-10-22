import React from "react";
import Image from "next/image";
import Brands from "./Brands";
import Pricecomponent from "./Pricecomponent";
import Availability from "./Availability.jsx";
import Productcategory from "./Productcategory.jsx";


const Sideshop = () => {
  return (
    <div className="grow-1 px-2 max-w-xl">
      {/* PRODUCT div */}
      <Productcategory />

      {/* BRANDS div */}
      <Brands />

      {/* price div */}
      <Pricecomponent />

      {/* AVAILABILITY div */}
      <Availability />

      {/* image div */}
      <div className="mt-20 ">
        <Image
          src="/assets/images/sidebar-banner.gif.png"
          alt="..."
          width={270}
          height={370}
          className="block w-full"
        />
      </div>
    </div>
  );
};

export default Sideshop;
