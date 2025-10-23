import { Mail, MapPin, PhoneCall } from 'lucide-react';
import React from 'react'

const Contactmethod = () => {
  return (
    <div className="py-10">
      <div className="text-center mx-auto">
        <h2 className=" text-4xl">Get In Touch</h2>
        <p className="text-sm mt-3 font-light">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita{" "}
          <br />
          quaerat unde quam dolor culpa veritatis inventore, aut commodi eum{" "}
          <br />
          veniam vel.
        </p>
      </div>
      <div className="mt-8 flex justify-between items-center gap-5">
        {/* location  */}
        <div className="bg-gray-200 py-10 px-5 rounded text-center grow-1">
          <MapPin size={25} className="mx-auto text-[#35AFA0]" />
          <h5 className="my-3 text-sm">102 Street 2714 Donovan</h5>
          <p className="text-xs">Lorem ipsum dolar site amet discont</p>
        </div>
        {/* phone  */}
        <div className="bg-gray-200 py-10 px-5 rounded text-center grow-1">
          <PhoneCall size={25} className="mx-auto text-[#35AFA0]" />
          <h5 className="my-3 text-sm">+02 1234 567 88</h5>
          <p className="text-xs">Lorem ipsum dolar site amet discont</p>
        </div>
        {/* email  */}
        <div className="bg-gray-200 py-10 px-5 rounded text-center grow-1">
          <Mail size={25} className="mx-auto text-[#35AFA0]" />
          <h5 className="my-3 text-sm">info@example.com</h5>
          <p className="text-xs">Lorem ipsum dolar site amet discont</p>
        </div>
      </div>
    </div>
  );
}

export default Contactmethod
