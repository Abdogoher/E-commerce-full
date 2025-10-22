import React from 'react'

const Copon = () => {
    return (
      <div className="w-3/5 mx-auto py-8 flex justify-center bg-red-100 rounded-lg items-center">
        <p className='text-red-600 text-md'>
          Super discount for your <span className='underline font-bold'>first purchase</span>.
        </p>
        <p className='text-red-600 py-1 px-3 border border-dashed rounded-l-full rounded-r-full mx-2'>FREE25BAC</p>
        <p className='text-gray-500'>Use discount code in checkout!</p>
      </div>
    );
}

export default Copon
