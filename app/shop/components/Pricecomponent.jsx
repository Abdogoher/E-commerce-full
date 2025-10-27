'use client'
// import { togglePriceRange } from '@/app/redux/slices/filterSlice';
import { React, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { byprice } from '@/Redux/slices/filterSlice';

const Pricecomponent = () => {
  const dispatch = useDispatch()
  const [minprice , setminprice]=useState(0)
  const [maxprice, setmaxprice] = useState(9999);

  useEffect(() => {
    const handler = setTimeout(() => {
      dispatch(
        byprice({ min: Number(minprice), max: Number(maxprice) })
      );
    }, 500)
    return () => {
      clearTimeout(handler)
    }
  },[minprice , maxprice , dispatch])


  return (
    <div className="md:mb-4 md:ml-0 ml-2">
      <p className="font-medium mb-2 text-[8px] md:text-lg">PRICE</p>
      <div className="mb-4 flex justify-between">
        <div className="flex flex-col">
          <label className="mb-1 text-gray-500 text-[8px] md:text-xs" id="from">
            From
          </label>
          <input
            htmlFor="from"
            type="number"
            placeholder="0"
            className="bg-blue-100 w-8 md:w-24 rounded pl-2 py-[2px] md:py-2 text-[6px] md:text-xs"
            value={minprice}
            onChange={(e) => setminprice(e.target.value)}
          />
        </div>
        <span className="text-gray-700 text-[10px] mx-2 mt-3 md:mt-8">-</span>
        <div className="flex flex-col">
          <label className="mb-1 text-gray-500 text-[8px] md:text-xs" id="to">
            To
          </label>
          <input
            htmlFor="to"
            type="number"
            placeholder="90000"
            className="bg-blue-100 w-8 md:w-24 rounded pl-2 py-[2px] md:py-2 text-[6px] md:text-xs"
            value={maxprice}
            onChange={(e) => setmaxprice(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default Pricecomponent
