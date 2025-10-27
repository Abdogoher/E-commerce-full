"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bybrand } from "@/Redux/slices/filterSlice";


const Brands = () => {
  const dispatch = useDispatch();
  const { brands } = useSelector((state) => state.filters);
  const items = useSelector((state) => state.products.items);

  const allbrands = [...new Set(items.map((p) => p.brand || "..."))];
  return (
    <div className="md:mb-4 md:ml-0 ml-2">
      <p className="font-medium text-[8px] md:text-lg">BRANDS</p>
      <ul className="text-gray-500 grid grid-cols-2 md:grid-cols-1 gap-x-2">
        {allbrands.map((br, i) => {
          const count = items.filter((p) => p.brand === br).length;
          return (
            <li
              key={i}
              className="mb-1 flex justify-between text-[6px] md:text-xs"
            >
              <div className="flex justify-between">
                <input
                  type="checkbox"
                  id={br}
                  className="mr-[2px] md:mr-2 w-2 md:w-4 h-2 md:h-4"
                  checked={brands.includes(br)}
                  onChange={() => dispatch(bybrand(br))}
                />
                <label htmlFor={br} className="">
                  {br}
                </label>
              </div>
              <label className="ml-1">({count})</label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Brands;
