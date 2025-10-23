import { useSelector } from "react-redux";
import Image from "next/image";
import Rating from "@mui/material/Rating";
import { addToCart, removeFromCart } from "@/Redux/slices/cartSlice";

export default function SearchResults() {
    const { term, results, loading, error } = useSelector((s) => s.search);
      const cart = useSelector((state) => state.cart.items);
    

  if (!term || term.trim().length < 2) return null;

  return (
    <div className="mt-4">
      <h2 className="text-lg font-bold mb-2">نتائج البحث لـ: {term}</h2>
      {loading && <p>جاري التحميل...</p>}
      {error && <p>خطأ: {error}</p>}
      {results.length === 0 && !loading && <p>لا توجد نتائج</p>}

      <div className="grid grid-cols-4 gap-4">
        {results.map((pro) => {
          const inCart = cart.find((item) => item.id === pro.id);
          return (
            <div key={pro.id} className="p-4 border border-gray-200 rounded-md">
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
    </div>
  );
}
