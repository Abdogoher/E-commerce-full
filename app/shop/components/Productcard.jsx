"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Rating from "@mui/material/Rating";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "@/Redux/slices/ProductsSlice";
import { addToCart, removeFromCart } from "@/Redux/slices/cartSlice";

const Productcard = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.products);
  const { categories, brands, pricerange, stocks } = useSelector(
    (state) => state.filters
  );
  const cart = useSelector((state) => state.cart.items);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p>جاري تحميل المنتجات...</p>;
  if (error) return <p>خطأ: {error}</p>;
  if (!items || items.length === 0) return <p>لا يوجد منتجات</p>;

  const filteredproducts = items.filter((p) => {
    const incategory =
      categories.length === 0 || categories.includes(p.category);
    const inbrand = brands.length === 0 || brands.includes(p.brand);
    const inrange = p.price >= pricerange.min && p.price <= pricerange.max;
    const instock =
      stocks.length === 0 || stocks.includes(p.availabilityStatus);

    return incategory && inbrand && inrange && instock;
  });

  return (
    <div className="rounded-md mt-2 border border-gray-200 grid grid-cols-4">
      {filteredproducts.map((pro) => {
        const inCart = cart.find((item) => item.id === pro.id);
        return (
          <div
            key={pro.id}
            className="p-1 md:p-4 border border-gray-200 rounded-md"
          >
            <div className="relative">
              <span className="absolute rounded bg-red-500 text-white px-[2px] md:px-2 py-[2px] md:py-1 text-[6px] md:text-xs">
                {pro.discountPercentage}%
              </span>
              <Image
                src={pro.images[0]}
                alt={pro.title}
                width={175}
                height={155}
                className="w-full h-15 md:h-40 object-contain"
              />
            </div>

            <p className="font-medium text-[8px] md:text-sm mt-2">
              {pro.title.length > 15
                ? pro.title.slice(0, 15) + "..."
                : pro.title}
            </p>
            <p className="text-green-600 uppercase text-[5px] md:text-[10px] font-medium">
              STOCK: {pro.stock}
            </p>

            <div className="flex items-center">
              <Rating
                name="rating"
                value={pro.rating ?? 0}
                precision={0.5}
                readOnly
                sx={{
                  fontSize: {
                    xs: "8px", // على الموبايل
                    sm: "14px", // من أول شاشة كمبيوتر صغيرة
                    md: "16px", // لو عايز تكبر أكتر على الشاشات الأكبر
                  },
                }}
              />
              <span className="text-gray-400 ml-[2px] md:ml-2 text-[5px] md:text-xs">
                {Math.floor(pro.rating * 20)} review
              </span>
            </div>

            <div className="flex items-center gap-2 mt-1 md:mt-2">
              <span className="text-gray-400 text-[8px] md:text-md line-through font-medium">
                ${Math.round(pro.price * 1.2)}
              </span>
              <span className="text-red-600 text-[10px] md:text-lg font-medium">
                ${pro.price}
              </span>
            </div>

            <div className="font-bold flex items-center mt-1 md:mt-4 justify-center">
              <button
                className="bg-gray-300 w-4 md:w-10 h-4 md:h-8 rounded-l-full md:text-xs text-[10px]"
                onClick={() => dispatch(removeFromCart(pro.id))}
              >
                -
              </button>
              <span className="border border-gray-200 w-8 md:w-20 h-4 md:h-8 flex items-center justify-center md:text-xs text-[8px]">
                {inCart ? inCart.quantity : 0}
              </span>
              <button
                className="bg-yellow-400 w-4 md:w-10 h-4 md:h-8 rounded-r-full md:text-xs text-[8px]"
                onClick={() => dispatch(addToCart(pro))}
              >
                +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Productcard;
