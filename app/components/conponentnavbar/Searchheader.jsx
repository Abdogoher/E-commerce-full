"use client";
import React, { useState , useEffect } from "react";
import Image from "next/image";
import { Handbag, Search, User } from "lucide-react";
import BottomNav from "./BottomNav";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { logout, loaduser } from "@/Redux/slices/userSlice"

const searchheader = () => {
  const dispatch = useDispatch()
  const user=useSelector(state => state.user.user )
  const [showlogout, setshowlogout] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

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

  if (!isClient) return null;

  return (
    <div className="border w-full border-gray-200 py-4 ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* logo div  */}
        <div className="text-center md:text-left">
          <div className="flex items-center">
            {/* Logo */}
            <Image
              src="/assets/images/Logo.png"
              width={60}
              height={60}
              alt="Logo"
            />
            <span className="text-[#35AFA0] text-lg">Double-A</span>
          </div>
          <span className="text-[10px] text-gray-500 ">
            Online Grocery Shopping Center
          </span>
        </div>
        {/* search div  */}
        <div className="relative w-full md:w-[600px] lg:w-[800px]">
          <Search
            className="absolute right-3 top-5 -translate-y-1/2 text-gray-600"
            size={20}
          />
          <input
            type="search"
            placeholder="search for Products, Fruits, meat, eggs, etc..."
            className="px-5 py-3  bg-gray-200 rounded w-full text-sm "
          />
        </div>

        {/* user div  */}

        {user ? (
          <div className="flex items-center relative">
            <User
              className="bg-gray-200 rounded-full p-1"
              size={30}
              onClick={() => setshowlogout((prev) => !prev)}
            />
            {showlogout && (
              <button
                onClick={handlelogout}
                className="absolute bg-red-500 -left-22 rounded-l-full rounded-r-full py-1 px-4"
              >
                log out
              </button>
            )}
            <span className="mx-4 text-lg">$0.00</span>
            {/* cart  */}
            <div className="relative cursor-pointer">
              <Link href="/">
                <span className="bg-[#EA2B0F] text-white right-0 absolute -top-1  rounded-full px-1 text-xs">
                  {totalQuantity}
                </span>
                <Handbag
                  className="rounded-full bg-red-300 p-1 text-[#EA2B0F]"
                  size={30}
                />
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex items-center">
            <button className="py-1 px-9 rounded-l-full rounded-r-full bggreen text-white">
              <Link href="/login">Log in</Link>
            </button>
            <button className="py-1 px-7 rounded-l-full rounded-r-full bg-red-500 text-white ml-5">
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
