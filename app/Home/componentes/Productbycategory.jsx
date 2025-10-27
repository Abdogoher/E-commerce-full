"use client";
import React, { useEffect } from "react";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/Redux/slices/ProductsSlice";
import Rating from "@mui/material/Rating";
import { addToCart } from "@/Redux/slices/cartSlice";

const Productbycategory = ({ category }) => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const categories = [...new Set(items.map((p) => p.category))];

  if (loading) return <p>جاري تحميل المنتجات...</p>;
  if (error) return <p>خطأ: {error}</p>;
  if (!items || items.length === 0) return <p>لا يوجد منتجات</p>;

  const productbycatecory = items.filter((p) => p.category === category);
  return (
    <div className=" py-3">
      {/* tittle product by category */}
      <div className="flex justify-between py-3">
        <div>
          <h3 className="text-xs md:text-lg font-medium">{category}</h3>
          <p className="text-[8px] md:text-sm text-gray-400">
            The freshest green grocer products are waiting for you
          </p>
        </div>
        <div>
          <button className="flex border-gray-300 border py-1 px-2 rounded-l-full rounded-r-full text-[8px] md:text-sm text-gray-400 cursor-pointer">
            View All{" "}
            <MoveRight size={20} className="ml-1 w-3 md:w-6 h-3 md:h-6" />
          </button>
        </div>
      </div>

      {/* products */}
      <div className="rounded-lg border-gray-300 border-2 flex">
        {/* left side  */}
        <div className="w-1/3 flex flex-col relative pb-5">
          <div className="absolute px-1 md:px-5 py-2 md:py-8">
            <p className="text-[10px] md:text-sm">Weekly Discounts on</p>
            <h3 className="font-semibold text-xs md:text-lg">{category}</h3>
            <p className="text-[8px] md:text-sm my-1 md:my-3">Bacola Weekend Discount</p>
            <button className="flex py-1 md:py-2 px-1 md:px-3 rounded-l-full rounded-r-full bg-blue-700 text-[6px] md:text-xs text-white cursor-pointer">
              <Link href="/shop">View All</Link>
            </button>
          </div>
          <Image
            src="/assets/images/fasolia.png"
            alt="..."
            width={500}
            height={300}
          />

          <div className=" p-4 text-gray-700 mt-3">
            <ul className="grid grid-cols-2">
              {categories ? (
                categories.map((cat, i) => {
                  return <li key={i} className="text-[10px] md:text-sm">{cat}</li>;
                })
              ) : (
                <p>لا يوجد </p>
              )}
            </ul>
          </div>
          <button className="flex py-1 px-2 ml-3 text-[8px] md:text-sm text-blue-800 mt-auto cursor-pointer">
            View All <MoveRight size={20} className="w-3 md:w-5 h-3 md:h-5 "/>
          </button>
        </div>
        {/* left side  */}
        {/* right side  */}
        <div className="w-2/3 rounded-md grid grid-cols-3">
          {/* products  */}
          {productbycatecory ? (
            productbycatecory.slice(0,4).map((pro) => {
              return (
                <div
                  key={pro.id}
                  className="p-1 md:p-4 border border-gray-200 rounded-md"
                >
                  <div className="relative">
                    <span className="absolute rounded bggreen text-white px-[2px] md:px-2 py-[2px] md:py-1 text-[6px] md:text-xs">
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

                  <p className="font-medium text-[8px]  md:text-sm mt-2">
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
                    <span className="text-gray-400 ml-2 text-[5px] md:text-xs">
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
                  <div className="text-center">
                    <button
                      className="bg-amber-300 text-[6px] md:text-xs rounded-l-full rounded-r-full w-full py-1 mt-2"
                      onClick={() => dispatch(addToCart(pro))}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <p>لا يوجد منتجات</p>
          )}
        </div>
        {/* right side  */}
      </div>
    </div>
  );
};

export default Productbycategory;
