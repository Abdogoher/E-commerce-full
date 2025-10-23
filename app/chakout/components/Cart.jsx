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
    <div className="p-4">
      <h1 className="text-md ">Cart</h1>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          <ul className="space-y-3">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center pb-2"
              >
                <div className="flex items-center ">
                  <div className="relative">
                    <span className="absolute rounded-full -top-1 right-0 bg-gray-600 text-white px-1 text-xs">
                      {item.quantity}
                    </span>
                    <Image
                      src={item.images[0]}
                      alt={item.title}
                      width={64}
                      height={64}
                      className="border-3 border-gray-300 p-2 mr-2 rounded"
                    />
                  </div>
                  <span>{item.title}</span>
                </div>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex justify-between items-center text-sm">
            <p>Subtotal · {cart.length} items</p>
            <span className="">Total: ${totalPrice.toFixed(2)}</span>
          </div>

          <div className="mt-1 flex justify-between items-center text-sm">
            <p>Shipping</p>
            <span>FREE</span>
          </div>

          <div className="mt-2 flex justify-between items-center">
            <p className="font-bold">Total</p>
            <p className="font-bold">
              <span className="text-xs text-gray-400 font-normal">USD</span>{" "}
              Total: ${totalPrice.toFixed(2)}
            </p>
          </div>
          <p className="text-xs text-gray-400 ">
            Including $2.46 in taxes
          </p>
        </>
      )}
    </div>
  );
}
