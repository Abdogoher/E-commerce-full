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
        <p>Contact</p>
        {!user ? <Link href="/login">Log in</Link> : ""}
      </div>
      {/* comfirm  */}
      <div className="mt-5">
        <input
          type="text"
          className="w-full py-4 px-3 text-xs border rounded-lg border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Email or mobile phone number"
        />
        <div className="flex text-sm  mt-2">
          <input type="checkbox" id="comfirm" />
          <label className="ml-1" htmlFor="comfirm">
            Email me with news and offers
          </label>
        </div>
      </div>
      {/* delivery  */}
      <div className="mt-4">
        <h3>Delivery</h3>
        <form>
          {/* <!-- Country/Region --> */}
          <div className="relative">
            <input
              type="text"
              id="Country"
              placeholder=" "
              className="peer w-full border border-gray-400 rounded-md px-3 pt-6 pb-2 text-xs placeholder-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <label
              htmlFor="Country"
              className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-indigo-500"
            >
              Country/Region
            </label>
          </div>
          {/* <!-- Name --> */}
          <div className="flex gap-3 mt-3">
            <input
              type="text"
              placeholder="First name (optional)"
              className="w-full py-4 px-3 text-xs border rounded-lg border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <input
              type="text"
              required
              placeholder="Last name"
              className="w-full py-4 px-3 text-xs border rounded-lg border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          {/* <!-- Address --> */}
          <div>
            <input
              type="text"
              className="w-full mt-3 py-4 px-3 text-xs border rounded-lg border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Address"
            />
          </div>
          {/* <!-- Apartment, suite, etc. --> */}
          <div>
            <input
              type="text"
              className="w-full mt-3 py-4 px-3 text-xs border rounded-lg border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Apartment, suite, etc. (optional)"
            />
          </div>

          {/* <!-- Postal Code and city --> */}
          <div className="flex gap-3 mt-3">
            <input
              type="text"
              placeholder="Postal Code (optional)"
              className="w-full py-4 px-3 text-xs border rounded-lg border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <input
              type="text"
              required
              placeholder="city "
              className="w-full py-4 px-3 text-xs border rounded-lg border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          {/* Save Info Checkbox  */}
          <div className="flex items-center mt-3">
            <input
              type="checkbox"
              id="saveInfo"
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <label
              htmlFor="saveInfo"
              className="ml-2 block text-xs text-gray-700"
            >
              Save this information for next time
            </label>
          </div>
          {/* Pay now  */}
          <button
            type="submit"
            className="w-full mt-5 py-2 px-4 bg-gray-100 text-gray-500 font-semibold rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
