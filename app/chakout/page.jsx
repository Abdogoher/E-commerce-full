import React from 'react'
import Cart from './components/Cart'
import Contact from './components/Contact';

const page = () => {
  return (
    <div className=" grid grid-cols-2 divide-gray-300 divide-x pb-20 mt-3">
      <Contact />
      <Cart />
    </div>
  );
}

export default page
