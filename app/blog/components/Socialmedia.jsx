import React from "react";


import { Bot, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
const Socialmedia = () => {
  return (
    <div>
      <div className="p-1 md:p-4 mt-2 md:mt-8">
        <h2 className="mb-1 md:mb-4 text-[8px] md:text-sm font-medium">
          SOCIAL MEDIA
        </h2>
        <div className="flex bgfacebook rounded items-center p-[2px] md:p-2 mb-1">
          <Facebook size={16} className="text-white w-2 md:w-4" />
          <p className="text-[6px] md:text-xs text-white ml-[2px] md:ml-2 uppercase">
            facebook
          </p>
        </div>
        <div className="flex bginsta rounded items-center p-[2px] md:p-2 mb-1">
          <Instagram size={16} className="text-white w-2 md:w-4" />
          <p className="text-[6px] md:text-xs text-white ml-[2px] md:ml-2 uppercase">
            instagram
          </p>
        </div>
        <div className="flex bgtwiter rounded items-center p-[2px] md:p-2 mb-1">
          <Twitter size={16} className="text-white w-2 md:w-4" />
          <p className="text-[6px] md:text-xs text-white ml-[2px] md:ml-2 uppercase">
            twitter
          </p>
        </div>
        <div className="flex bgreddit rounded items-center p-[2px] md:p-2 mb-1">
          <Bot size={16} className="text-white w-2 md:w-4" />
          <p className="text-[6px] md:text-xs text-white ml-[2px] md:ml-2 uppercase">
            reddit
          </p>
        </div>
        <div className="flex bgpinterest rounded items-center p-[2px] md:p-2 mb-1">
          <Youtube size={16} className="text-white w-2 md:w-4" />
          <p className="text-[6px] md:text-xs text-white ml-[2px] md:ml-2 uppercase">
            pinterest
          </p>
        </div>
      </div>
    </div>
  );
};

export default Socialmedia;
