import React from 'react'

const Copon = () => {
    return (
      <div className="md:py-8 py-3 flex justify-center bg-red-100 rounded-lg items-center text-[6px] md:text-md">
        <p className="text-red-600 ">
          Super discount for your{" "}
          <span className="underline font-bold">first purchase</span>.
        </p>
        <p className="text-red-600 py-1 px-3 border border-dashed rounded-l-full rounded-r-full mx-2">
          FREE25BAC
        </p>
        <p className="text-gray-500">Use discount code in checkout!</p>
      </div>
    );
}

export default Copon
