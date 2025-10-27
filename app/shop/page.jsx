

import React from 'react'
import Pageroute from './components/Pageroute';
import Sideshop from './components/Sideshop';
import Itemsshop from './components/Itemsshop';


const page = () => {
  return (
    <div>
      <Pageroute />
      <div className="flex flex-col md:flex-row justify-between">
      <Sideshop />
      <Itemsshop />
      </div>
    </div>
  )
}

export default page;