"use client";
import React, { useState , useEffect } from "react";
import Image from "next/image";
import { Handbag, Search, User } from "lucide-react";
import BottomNav from "./BottomNav";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { logout, loaduser } from "@/Redux/slices/userSlice"
import { searchProducts, setSearchTerm } from "@/Redux/slices/searchSlice";

const searchheader = () => {
  const dispatch = useDispatch()
  const user=useSelector(state => state.user.user )
  const [showlogout, setshowlogout] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const cart = useSelector((state) => state.cart.items);
  const totalPrice = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
  );
  const {term} =useSelector((state) => state.search)

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== "undefined") {
      dispatch(loaduser());
    }
  }, [dispatch]);

  const handlelogout = () => {
    dispatch(logout())
    setshowlogout(false);
  };
  const handlesearch = (e) => {
    const value = e.target.value
    dispatch(setSearchTerm(value))
    if (value.trim().length > 1) {
      dispatch(searchProducts(value))
    }
  }

  if (!isClient) return null;

  return (
    <div className="border w-full border-gray-200 py-4 ">
      <div className="container mx-auto flex flex-row justify-between items-center">
        {/* logo div  */}
        <div className="text-center md:text-left">
          <div className="flex items-center">
            {/* Logo */}
            <Image
              src="/assets/images/Logo.png"
              width={60}
              height={60}
              alt="Logo"
              className="w-8"
            />
            <span className="text-[#35AFA0] text-sm md:text-lg">Double-A</span>
          </div>
          <span className="text-[5px] md:text-[10px] text-gray-500 ">
            Online Grocery Shopping Center
          </span>
        </div>
        {/* search div  */}
        <div className="relative w-44 md:w-[200px] lg:w-[600px] px-0 md:px-10">
          <Search
            className="absolute w-4 right-3 md:right-13 top-5 -translate-y-1/2 text-gray-600"
            size={20}
          />
          <input
            type="search"
            placeholder="search for Products, Fruits, meat, eggs, etc..."
            className="px-5 py-3  bg-gray-200 rounded w-full text-sm "
            onChange={handlesearch}
          />
        </div>

        {/* user div  */}

        {user ? (
          <div className="flex items-center relative">
            <User
              className="bg-gray-200 md:w-10 w-6 rounded-full p-1"
              size={30}
              onClick={() => setshowlogout((prev) => !prev)}
            />
            {showlogout && (
              <button
                onClick={handlelogout}
                className="absolute bg-red-500 md:-left-22 -left-14 rounded-l-full rounded-r-full py-[0.7px] md:py-1 md:px-4 px-2 text-xs md:text-md"
              >
                log out
              </button>
            )}
            <span className="mx-4 text-sm md:text-lg">
              {totalPrice.toFixed(2)}
            </span>
            {/* cart  */}
            <div className="relative cursor-pointer">
              <Link href="/chakout">
                <span className="bg-[#EA2B0F] text-white right-0 absolute -top-1  rounded-full px-1 text-[10px] md:text-xs">
                  {totalQuantity}
                </span>
                <Handbag
                  className="rounded-full md:w-10 w-6 bg-red-300 p-1 text-[#EA2B0F]"
                  size={30}
                />
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex items-center">
            <button className="py-1 px-4 md:px-9 text-sm md:text-md  rounded-l-full rounded-r-full bggreen text-white">
              <Link href="/login">Log in</Link>
            </button>
            <button className="py-1 px-4 md:px-9 text-sm md:text-md rounded-l-full rounded-r-full bg-red-500 text-white ml-5">
              <Link href="/register">Register</Link>
            </button>
          </div>
        )}
      </div>
      <BottomNav />
    </div>
  );
};

export default searchheader;
