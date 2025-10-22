import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
// import { faInstagram } from "@fortawesome/free-brands-svg-icons";
// import { faTwitter } from "@fortawesome/free-brands-svg-icons";
// import { faReddit } from "@fortawesome/free-brands-svg-icons";
// import { faPinterestP } from "@fortawesome/free-brands-svg-icons";

import { Bot, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
const Socialmedia = () => {
  return (
    <div>
      <div className="p-4 mt-8">
        <h2 className="mb-4 font-medium text-sm">SOCIAL MEDIA</h2>
        <div className="flex bgfacebook rounded p-2 mb-1">
          {/* <FontAwesomeIcon className="text-white mr-2 text-xs" icon={faFacebookF} /> */}
          <Facebook size={16} className="text-white" />
          <p className="text-xs text-white ml-2 uppercase">facebook</p>
        </div>
        <div className="flex bginsta rounded p-2 mb-1">
          {/* <FontAwesomeIcon className="text-white mr-2" icon={faInstagram} /> */}
          <Instagram size={16} className="text-white" />
          <p className="text-xs text-white ml-2 uppercase">instagram</p>
        </div>
        <div className="flex bgtwiter rounded p-2 mb-1">
          {/* <FontAwesomeIcon className="text-white mr-2" icon={faTwitter} /> */}
          <Twitter size={16} className="text-white" />
          <p className="text-xs text-white ml-2 uppercase">twitter</p>
        </div>
        <div className="flex bgreddit rounded p-2 mb-1">
          {/* <FontAwesomeIcon className="text-white mr-2" icon={faReddit} /> */}
          <Bot size={16} className="text-white" />
          <p className="text-xs text-white ml-2 uppercase">reddit</p>
        </div>
        <div className="flex bgpinterest rounded p-2 mb-1">
          {/* <FontAwesomeIcon className="text-white mr-2" icon={faPinterestP} /> */}
          <Youtube size={16} className="text-white" />
          <p className="text-xs text-white ml-2 uppercase">pinterest</p>
        </div>
      </div>
    </div>
  );
};

export default Socialmedia;
