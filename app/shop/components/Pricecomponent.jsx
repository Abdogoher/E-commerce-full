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
    <div className="mb-8">
      <p className="font-medium mb-2">PRICE</p>
      <div className="mb-4 flex justify-between">
        <div className="flex flex-col">
          <label className="mb-1 text-gray-500" id="from">
            From
          </label>
          <input
            htmlFor="from"
            type="number"
            placeholder="0"
            className="bg-blue-100 w-24 rounded mr-2 pl-2 py-2"
            value={minprice}
            onChange={(e)=> setminprice(e.target.value)}
          />
        </div>
        <span className="text-gray-700 mt-8">-</span>
        <div className="flex flex-col">
          <label className="mb-1 text-gray-500" id="to">
            To
          </label>
          <input
            htmlFor="to"
            type="number"
            placeholder="90000"
            className="bg-blue-100 w-24 rounded mr-2 pl-2 py-2"
            value={maxprice}
            onChange={(e)=>setmaxprice(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default Pricecomponent
