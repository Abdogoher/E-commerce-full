

import React from 'react'
import Pageroute from './components/Pageroute';
import Sideshop from './components/Sideshop';
import Itemsshop from './components/Itemsshop';


const page = () => {
  return (
    <div className='container w-2/3 mx-auto'>
      <Pageroute />
      <div className="flex">
      <Sideshop />
      <Itemsshop />
      </div>
    </div>
  )
}

export default page;