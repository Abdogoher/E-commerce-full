import React from "react";

const Sendus = () => {
  return (
    <div className=" mx-auto w-80 md:w-200 shadow-2xl shadow-gray-400 py-5 md:py-20 px-6 md:px-24">
      <div className="text-center pb-3 md:pb-10 border-b border-gray-300">
        <h3 className="text-sm md:text-4xl">Send Us</h3>
        <p className="text-[8px] md:text-sm mt-1">
          Contact us for all your questions and opinions, or you can solve your
          problems in a shorter time with our contact offices.
        </p>
      </div>

      {/* form  */}
      <form>
        {/* <!-- Name --> */}
        <div className="flex gap-1 md:gap-3 mt-3 md:mt-10">
          <div className="grow-1">
            <label className="text-[8px] md:text-xs pl-1" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-1 md:p-3 text-[8px] md:text-xs bg-gray-200 rounded-lg "
            />
          </div>
          <div className="grow-1">
            <label className="text-[8px] md:text-xs pl-1" htmlFor="email">
              Email
            </label>
            <input
              type="text"
              id="email"
              className="w-full p-1 md:p-3 text-[8px] md:text-xs bg-gray-200 rounded-lg"
            />
          </div>
        </div>
        {/* <!-- phone number --> */}
        <div>
          <label className="text-[8px] md:text-xs pl-1" htmlFor="phone">
            Phone Number
          </label>
          <input
            type="text"
            id="phone"
            className="w-full p-1 md:p-3 text-[8px] md:text-xs bg-gray-200 rounded-lg"
          />
        </div>
        {/* <!--message --> */}
        <div>
          <label className="text-[8px] md:text-xs pl-1" htmlFor="message">
            Your message
          </label>
          <input
            type="text"
            id="message"
            className="w-full h-8 md:h-20 p-1 md:p-3 text-[8px] md:text-xs bg-gray-200 rounded-lg"
          />
        </div>

        <button
          type="submit"
          className=" mt-2 py-1 md:py-2 px-2 md:px-4 bg-[#35AFA0] text-white text-[10px] md:text-sm rounded hover:bg-green-600 focus:outline-none"
        >
          send message
        </button>
      </form>
    </div>
  );
};

export default Sendus;
