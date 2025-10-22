"use client"
import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { bycategory } from "@/Redux/slices/filterSlice";

const Productcategory = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.filters);
  const items = useSelector((state) => state.products.items);
  const allcategory = Array.isArray(items)
    ? [...new Set(items.map((c) => c.category || "..."))]
    : [];

  return (
    <div className="mb-4">
      <p className="font-medium">PRODUCT CATEGORIES</p>
      <div>
        <ul className="text-gray-500">
          {allcategory.map((cat, i) => {
            const count = items.filter(c => c.category === cat).length;
            return (
              <li key={i} className="mb-1 flex justify-between">
                <div className="flex justify-between">
                  <input
                    type="checkbox"
                    id={cat}
                    className="mr-2 "
                    checked={categories.includes(cat)}
                    onChange={() => dispatch(bycategory(cat))}
                  />
                  <label key={cat} htmlFor={cat} className="text-color1">
                    {cat}
                  </label>
                </div>
                <label className="ml-1">({count})</label>
              </li>
            );
          })}
          
        </ul>
      </div>
    </div>
  );
}

export default Productcategory
