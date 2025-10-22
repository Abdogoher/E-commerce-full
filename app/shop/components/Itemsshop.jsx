"use client"
import React from "react";
import Image from "next/image";
import Productcard from "./Productcard";
// import Pagination from "./Pagination";
import {useSelector} from "react-redux"
const Itemsshop = () => {
  const items = useSelector(state => state.products.items)
  return (
    <div className="grow-10 px-2">
      {/* image div */}
      <div className=" ">
        <Image
          src="/assets/images/shopbanner.png"
          alt="..."
          width={855}
          height={240}
          className="block w-full"
        />
      </div>
      {/* caption div */}
      <div className="flex justify-between py-4 px-12 mt-4 bg-blue-50 rounded text-xs">
        <div className="text-gray-400">{items ? items.length : "0"}products</div>
        <div>
          <span className="text-gray-400">Sort by:</span>
          <span className="font-medium">Alphabetically,A-Z</span>
        </div>
      </div>
      {/* product card */}
      <Productcard />
      {/* pagination */}
      {/* {items.length >= 1 ? (
        <Pagination getPage={1} pageCount={500} />
      ) : null} */}
    </div>
  );
};

export default Itemsshop;
