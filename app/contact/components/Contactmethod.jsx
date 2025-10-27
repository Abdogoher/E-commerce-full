import { Mail, MapPin, PhoneCall } from 'lucide-react';
import React from 'react'

const Contactmethod = () => {
  return (
    <div className="py-3 md:py-10">
      <div className="text-center mx-auto">
        <h2 className="text-xs md:text-4xl">Get In Touch</h2>
        <p className="text-[7px] md:text-sm mt-1 md:mt-3 font-light">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita{" "}
          <br />
          quaerat unde quam dolor culpa veritatis inventore, aut commodi eum{" "}
          <br />
          veniam vel.
        </p>
      </div>
      <div className="mt-3 md:mt-8 flex justify-between items-center gap-2 md:gap-5">
        {/* location  */}
        <div className="bg-gray-200 py-3 md:py-10 px-2 md:px-5 rounded text-center grow-1">
          <MapPin
            size={25}
            className="mx-auto text-[#35AFA0] w-4 h-4 md:w-8 md:h-8"
          />
          <h5 className="my-1 md:my-3 text-[8px] md:text-sm">
            102 Street 2714 Donovan
          </h5>
          <p className="text-[6px] md:text-xs">
            Lorem ipsum dolar site amet discont
          </p>
        </div>
        {/* phone  */}
        <div className="bg-gray-200 py-3 md:py-10 px-2 md:px-5 rounded text-center grow-1">
          <PhoneCall
            size={25}
            className="mx-auto text-[#35AFA0] w-4 h-4 md:w-8 md:h-8"
          />
          <h5 className="my-1 md:my-3 text-[8px] md:text-sm">
            +02 1234 567 88
          </h5>
          <p className="text-[6px] md:text-xs">
            Lorem ipsum dolar site amet discont
          </p>
        </div>
        {/* email  */}
        <div className="bg-gray-200 py-3 md:py-10 px-2 md:px-5 rounded text-center grow-1">
          <Mail
            size={25}
            className="mx-auto text-[#35AFA0] w-4 h-4 md:w-8 md:h-8"
          />
          <h5 className="my-1 md:my-3 text-[8px] md:text-sm">
            info@example.com
          </h5>
          <p className="text-[6px] md:text-xs">
            Lorem ipsum dolar site amet discont
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contactmethod
