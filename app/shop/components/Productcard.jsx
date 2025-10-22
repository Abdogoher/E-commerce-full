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
          <div key={pro.id} className="p-8 border border-gray-200 rounded-md">
            <div className="relative">
              <span className="absolute rounded bg-red-500 text-white px-2 py-1 text-xs">
                {pro.discountPercentage}%
              </span>
              <Image
                src={pro.images[0]}
                alt={pro.title}
                width={175}
                height={155}
                className="w-full h-40 object-contain"
              />
            </div>

            <p className="font-medium text-md mt-2">
              {pro.title.length > 15
                ? pro.title.slice(0, 15) + "..."
                : pro.title}
            </p>
            <p className="text-green-600 uppercase text-xs font-medium">
              STOCK: {pro.stock}
            </p>

            <div className="flex items-center">
              <Rating
                name="rating"
                value={pro.rating ?? 0}
                precision={0.5}
                readOnly
                sx={{ fontSize: 14 }}
              />
              <span className="text-gray-400 ml-2 text-xs">
                {Math.floor(pro.rating * 20)} review
              </span>
            </div>

            <div className="flex items-center gap-2 mt-2">
              <span className="text-gray-400 text-md line-through font-medium">
                ${Math.round(pro.price * 1.2)}
              </span>
              <span className="text-red-600 text-lg font-medium">
                ${pro.price}
              </span>
            </div>

            <div className="font-bold flex items-center mt-4">
              <button
                className="bg-gray-300 w-10 h-8 rounded-l-full "
                onClick={() => dispatch(removeFromCart(pro.id))}
              >
                -
              </button>
              <span className="border border-gray-200 w-20 h-8 flex items-center justify-center">
                {inCart ? inCart.quantity : 0}
              </span>
              <button
                className="bg-yellow-400 w-10 h-8 rounded-r-full "
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
