"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/Redux/slices/ProductsSlice";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Rating from "@mui/material/Rating";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { addToCart } from "@/Redux/slices/cartSlice";

const BestSellers = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p>جاري تحميل المنتجات ...</p>;
  if (error) return <p>خطأ : {error}</p>;
  if (!items) return <p>لا يوجد منتجات</p>;

  return (
    <div className="py-3">
      {/* tittle best seller */}
      <div className="flex justify-between">
        <div>
          <h3 className="text-xs md:text-md font-medium">BEST SELLERS</h3>
          <p className="text-[8px] md:text-xs text-gray-400">
            Do not miss the current offers until the end of March.
          </p>
        </div>
        <div>
          <button className="flex border-gray-300 border py-1 px-2 rounded-l-full rounded-r-full text-[8px] md:text-sm text-gray-400 cursor-pointer">
            View All{" "}
            <MoveRight size={20} className="ml-1 w-3 md:w-6 h-3 md:h-6" />
          </button>
        </div>
      </div>
      {/* products  */}
      <div className="flex py-5 gap-0">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={0}
          slidesPerView={4}
          grabCursor={true}
          navigation
          autoplay={{ delay: 3000 }}
          loop={true}
        >
          {items.map((pro, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="p-1 md:p-4 border border-gray-200 rounded-md">
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
                  <div className="text-center">
                    <button
                      className="bg-amber-300 text-[6px] md:text-xs rounded-l-full rounded-r-full w-full py-1 mt-2"
                      onClick={() => dispatch(addToCart(pro))}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default BestSellers;
