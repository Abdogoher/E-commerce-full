import React from "react";

const Sendus = () => {
  return (
    <div className=" mx-auto shadow-2xl shadow-gray-400 py-20 px-24">
      <div className="text-center pb-10 border-b border-gray-300">
        <h3 className="text-4xl">Send Us</h3>
        <p className="text-sm mt-1">
          Contact us for all your questions and opinions, or you can solve your
          problems in a shorter time with our contact offices.
        </p>
      </div>

      {/* form  */}
      <form>
        {/* <!-- Name --> */}
        <div className="flex gap-3 mt-10">
          <div className="grow-1">
            <lebal className="text-xs" htmlFor="name">
              Name
            </lebal>
            <input
              type="text"
              id="name"
              className="w-full p-3 text-xs bg-gray-200 rounded-lg "
            />
          </div>
          <div className="grow-1">
            <lebal className="text-xs" htmlFor="email">
              Email
            </lebal>
            <input
              type="text"
              id="email"
              className="w-full p-3 text-xs bg-gray-200 rounded-lg"
            />
          </div>
        </div>
        {/* <!-- phone number --> */}
        <div>
          <lebal className="text-xs" htmlFor="phone">
            Phone Number
          </lebal>
          <input
            type="text"
            id="phone"
            className="w-full p-3 text-xs bg-gray-200 rounded-lg"
          />
        </div>
        {/* <!--message --> */}
        <div>
          <lebal className="text-xs" htmlFor="message">
            Your message
          </lebal>
          <input
            type="text"
            id="message"
            className="w-full h-20 p-3 text-xs bg-gray-200 rounded-lg"
          />
        </div>

        <button
          type="submit"
          className=" mt-2 py-2 px-4 bg-[#35AFA0] text-white text-sm rounded hover:bg-green-600 focus:outline-none"
        >
          send message
        </button>
      </form>
    </div>
  );
};

export default Sendus;
