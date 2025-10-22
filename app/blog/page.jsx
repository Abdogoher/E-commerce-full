import React from "react";
import Article1 from "./components/Article1";
import Article2 from "./components/Article2";
// import Pagination from "../shop/components/Pagination";
import Recentpostes from "./components/Recentpostes";
import Socialmedia from "./components/Socialmedia";
import Tages from "./components/Tages";
import Widgetbnner from "./components/Widgetbnner";

const page = () => {
  return (
    <div className="container w-2/3 mx-auto flex">
      <div className="w-3/4 p-2">
        <Article1 />
        <Article2 />
        {/* <Pagination /> */}
      </div>
      <div className="w-1/4 h-96 p-2">
        <Recentpostes />
        <Socialmedia />
        <Widgetbnner />
        <Tages />
          </div>
    </div>
  );
};

export default page;
