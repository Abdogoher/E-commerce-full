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

const BestSellers = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.Products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p>جاري تحميل المنتجات ...</p>;
  if (error) return <p>خطأ : {error}</p>;
  if (!items) return <p>لا يوجد منتجات</p>;

  return (
    <div className="w-3/5 mx-auto py-3">
      {/* tittle best seller */}
      <div className="flex justify-between">
        <div>
          <h3 className="text-md font-semibold">BEST SELLERS</h3>
          <p className="text-xs text-gray-400">
            Do not miss the current offers until the end of March.
          </p>
        </div>
        <div>
          <button className="flex border-gray-300 border py-1 px-2 rounded-l-full rounded-r-full text-sm text-gray-400 cursor-pointer">
            View All <MoveRight size={20} />
          </button>
        </div>
      </div>
      {/* products  */}
      <div className="flex py-5 gap-0">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={0}
          slidesPerView={5}
          grabCursor={true}
          navigation
          autoplay={{ delay: 3000 }}
          loop={true}
        >
          {items.map((pro, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="p-4 border border-gray-200 rounded-md">
                  <div className="relative">
                    <span className="absolute rounded bggreen text-white px-2 py-1 text-xs">
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

                  <p className="font-medium text-sm mt-2">
                    {pro.title.length > 15
                      ? pro.title.slice(0, 15) + "..."
                      : pro.title}
                  </p>
                  <p className="text-green-600 uppercase text-[10px] font-medium">
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
                  <div className="text-center">
                    <button className="bg-amber-300 text-xs rounded-l-full rounded-r-full w-full py-1 mt-2">
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
