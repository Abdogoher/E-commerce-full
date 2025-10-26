"use client";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const Contact = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <div className="mr-2 p-4">
      {/* title  */}
      <div className="flex justify-between">
        <p className="text-[10px] md:text-lg">Contact</p>
        {!user ? (
          <Link href="/login" className="text-[10px] md:text-lg">
            Log in
          </Link>
        ) : (
          ""
        )}
      </div>
      {/* comfirm  */}
      <div className="md:mt-5">
        <input
          type="text"
          className="w-full py-1 md:py-4 px-1 md:px-3 text-[6px] md:text-xs border rounded-lg border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Email or mobile phone number"
        />
        <div className="flex items-center text-[6px] md:text-sm mt-2">
          <input type="checkbox" id="comfirm" className="w-2 md:w-4" />
          <label className="ml-1" htmlFor="comfirm">
            Email me with news and offers
          </label>
        </div>
      </div>
      {/* delivery  */}
      <div className="mt-1 md:mt-4">
        <h3 className="text-xs md:text-lg">Delivery</h3>
        <form>
          {/* <!-- Country/Region --> */}
          <div className="relative">
            <input
              type="text"
              id="Country"
              placeholder=" "
              className="peer w-full border border-gray-400 rounded-md px-1 md:px-3 pt-2 md:pt-6 pb-1 md:pb-2 text-[8px] md:text-xs placeholder-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <label
              htmlFor="Country"
              className="absolute left-1 md:left-4 top-1 md:top-2 text-gray-500 text-[8px] md:text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-[2px] md:peer-focus:top-2 peer-focus:text-[6px] md:peer-focus:text-sm peer-focus:text-indigo-500"
            >
              Country/Region
            </label>
          </div>
          {/* <!-- Name --> */}
          <div className="flex gap-3 mt-3">
            <input
              type="text"
              placeholder="First name (optional)"
              className="w-full py-1 md:py-4 px-1 md:px-3 text-[6px] md:text-xs border rounded-lg border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <input
              type="text"
              required
              placeholder="Last name"
              className="w-full py-1 md:py-4 px-1 md:px-3 text-[6px] md:text-xs border rounded-lg border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          {/* <!-- Address --> */}
          <div className="flex gap-1 md:gap-3 mt-2 md:mt-3">
            <input
              type="text"
              className="w-full py-1 md:py-4 px-1 md:px-3 text-[6px] md:text-xs border rounded-lg border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Address"
            />
          </div>
          {/* <!-- Apartment, suite, etc. --> */}
          <div className="flex gap-1 md:gap-3 mt-2 md:mt-3">
            <input
              type="text"
              className="w-full py-1 md:py-4 px-1 md:px-3 text-[6px] md:text-xs border rounded-lg border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Apartment, suite, etc. (optional)"
            />
          </div>

          {/* <!-- Postal Code and city --> */}
          <div className="flex gap-1 md:gap-3 mt-2 md:mt-3">
            <input
              type="text"
              placeholder="Postal Code (optional)"
              className="w-full py-1 md:py-4 px-1 md:px-3 text-[6px] md:text-xs border rounded-lg border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <input
              type="text"
              required
              placeholder="city "
              className="w-full py-1 md:py-4 px-1 md:px-3 text-[6px] md:text-xs border rounded-lg border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          {/* Save Info Checkbox  */}
          <div className="flex items-center mt-2 md:mt-3">
            <input
              type="checkbox"
              id="saveInfo"
              className="w-2 md:w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <label
              htmlFor="saveInfo"
              className="ml-2 block text-[6px] md:text-xs text-gray-700"
            >
              Save this information for next time
            </label>
          </div>
          {/* Pay now  */}
          <button
            type="submit"
            className="w-full mt-2 md:mt-5 py-1 md:py-2 px-2 md:px-4 text-[8px] md:text-lg bg-gray-100 text-gray-500 font-semibold rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
