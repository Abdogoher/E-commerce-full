"use client";
import Image from "next/image";
import { useSelector } from "react-redux";

export default function Cart() {
  const cart = useSelector((state) => state.cart.items);

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="p-1 md:p-4">
      <h3 className="text-xs md:text-lg">Cart</h3>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          <ul className="space-y-3">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center pb-1 md:pb-2"
              >
                <div className="flex items-center ">
                  <div className="relative">
                    <span className="absolute rounded-full -top-1 right-0 bg-gray-600 text-white px-1 text-[6px] md:text-xs">
                      {item.quantity}
                    </span>
                    <Image
                      src={item.images[0]}
                      alt={item.title}
                      width={64}
                      height={64}
                      className="w-6 md:w-20 border-1 md:border-3 border-gray-300 p-[1px] md:p-2 mr-2 rounded"
                    />
                  </div>
                  <span className="text-[8px] md:text-xs">{item.title}</span>
                </div>
                <span className="text-[8px] md:text-xs">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-2 md:mt-5 flex justify-between items-center text-[8px] md:text-sm">
            <p>Subtotal · {cart.length} items</p>
            <span className="">Total: ${totalPrice.toFixed(2)}</span>
          </div>

          <div className="mt-1 flex justify-between items-center text-[8px] md:text-sm">
            <p>Shipping</p>
            <span>FREE</span>
          </div>

          <div className="mt-2 flex justify-between items-center text-[8px] md:text-sm">
            <p className="font-bold">Total</p>
            <p className="font-bold">
              <span className="text-[6px] md:text-xs text-gray-400 font-normal">
                USD
              </span>{" "}
              Total: ${totalPrice.toFixed(2)}
            </p>
          </div>
          <p className="text-[6px] md:text-xs text-gray-400 ">
            Including $2.46 in taxes
          </p>
        </>
      )}
    </div>
  );
}
