import React from "react";
import Image from "next/image";
import Brands from "./Brands";
import Pricecomponent from "./Pricecomponent";
import Availability from "./Availability.jsx";
import Productcategory from "./Productcategory.jsx";


const Sideshop = () => {
  return (
    <div className="px-2 flex justify-between md:flex-col">
      {/* PRODUCT div */}
      <Productcategory />

      {/* BRANDS div */}
      <Brands />

      {/* price div */}
      <Pricecomponent />

      {/* AVAILABILITY div */}
      <Availability />

      {/* image div */}
      <div className="mt-20 hidden sm:block grow-0 sm:grow-1">
        <Image
          src="/assets/images/happyday.jpg"
          alt="..."
          width={270}
          height={370}
          className="w-0 h-0 md:w-full md:h-100"
        />
      </div>
    </div>
  );
};

export default Sideshop;
