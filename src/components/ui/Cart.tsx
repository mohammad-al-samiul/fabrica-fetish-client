"use client";
import React, { useContext, useEffect, useState } from "react";
import { IProduct } from "@/types";
import { useRouter } from "next/navigation";
import NextLink from "next/link";
import { Button, Image } from "@nextui-org/react";
import { toast } from "sonner";
import { CartContext } from "@/context/cart.provider";
import { calculateTotalAmount } from "@/utils/calculateAmount";

interface CartItem {
  _id?: string;
  id?: string;
  title: string;
  price: number;
  description?: string; // Optional description
  category: string;
  image: string;
  rating: { rate: number; count: number };
  quantity: number;
}

const CartPage = () => {
  const [total, setTotal] = useState(0);
  const [carts, setCarts] = useState<IProduct[]>([]);
  const router = useRouter();
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("CartContext is not available!");
  }

  const { setCarts: setContextCarts } = cartContext;

  // Use useEffect to access localStorage on the client side only
  useEffect(() => {
    // Ensure localStorage is only accessed in the client-side environment
    if (typeof window !== "undefined") {
      const savedCarts = JSON.parse(localStorage.getItem("carts") ?? "[]");
      setCarts(savedCarts);
    }
  }, []);

  useEffect(() => {
    const total = calculateTotalAmount(carts);
    setTotal(total);
  }, [carts]);

  const handleIncrement = (id: string) => {
    const updatedProducts = carts.map((item: IProduct) => {
      if (item?._id === id) {
        return {
          ...item,
          quantity: item?.quantity! + 1,
        };
      }
      return item;
    });

    localStorage.setItem("carts", JSON.stringify(updatedProducts));
    setCarts(updatedProducts); // Update local state
    router.push("/carts");
  };

  const handleDecrement = (id: string) => {
    const updatedProducts = carts.map((item: IProduct) => {
      if (item?._id === id) {
        return {
          ...item,
          quantity: item?.quantity! - 1,
        };
      }
      return item;
    });

    localStorage.setItem("carts", JSON.stringify(updatedProducts));
    setCarts(updatedProducts); // Update local state
    router.push("/carts");
  };

  const handleRemoveProduct = (id: string) => {
    const updatedProducts = carts.filter((item: IProduct) => item?._id !== id);

    localStorage.setItem("carts", JSON.stringify(updatedProducts));
    setCarts(updatedProducts);
    setContextCarts(updatedProducts as CartItem[]); // Update context as well
    toast.success("Product has been removed successfully!");
  };

  return (
    <div>
      {!carts?.length ? (
        <div className="flex items-center justify-center my-10 h-[300px]">
          <div className="text-center">
            <h1 className="text-xl font-semibold">
              No Products Selected for Purchasing
            </h1>
            <p className="text-gray-600 mt-2">
              Please explore our collection to find the perfect product for you.
            </p>
            <div className="mt-4">
              <Button
                as={NextLink}
                href="/products"
                className="bg-default-800 text-default-50"
              >
                Explore Products
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-gray-100">
          <div className="container mx-auto mt-10">
            <div className="lg:flex shadow-md my-10">
              <div className="lg:w-3/4 bg-white px-10 py-10">
                <div className="flex justify-between border-b pb-8">
                  <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                  <h2 className="font-semibold text-2xl">
                    {carts?.length} Items
                  </h2>
                </div>
                {/* Render the products in the cart */}
                <div className="flex mt-10 mb-5">
                  <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                    Product Details
                  </h3>
                  <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                    Quantity
                  </h3>
                  <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                    Price
                  </h3>
                  <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                    Total
                  </h3>
                </div>
                {carts?.map((cart: any, i: any) => (
                  <div
                    key={i}
                    className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
                  >
                    <div className="flex w-2/5 items-center">
                      <Image width={100} src={cart?.image} alt={cart?.title} />
                      <div className="flex flex-col justify-between ml-4 flex-grow">
                        <span className="font-bold text-sm">{cart?.title}</span>
                        <span className="text-red-500 text-xs capitalize">
                          {cart?.category}
                        </span>
                        <p
                          onClick={() => handleRemoveProduct(cart?._id)}
                          className="cursor-pointer font-semibold hover:text-red-500 text-gray-500 text-xs"
                        >
                          Remove
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center w-1/5">
                      <svg
                        onClick={() => handleDecrement(cart?._id)}
                        className="cursor-pointer fill-current text-gray-600 w-3"
                        viewBox="0 0 448 512"
                      >
                        <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                      </svg>
                      <input
                        className="mx-2 border text-center w-8"
                        type="text"
                        readOnly
                        value={cart?.quantity}
                      />
                      <svg
                        onClick={() => handleIncrement(cart?._id)}
                        className="fill-current text-gray-600 w-3 cursor-pointer"
                        viewBox="0 0 448 512"
                      >
                        <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                      </svg>
                    </div>
                    <span className="text-center w-1/5 font-semibold text-sm">
                      ${cart?.price}
                    </span>
                    <span className="text-center w-1/5 font-semibold text-sm">
                      ${(cart?.price * cart?.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              <div id="summary" className="lg:w-1/4 px-8 py-10">
                <h1 className="font-semibold text-2xl border-b pb-8">
                  Order Summary
                </h1>
                <div className="flex justify-between mt-10 mb-5">
                  <span className="font-semibold text-sm uppercase">
                    Items {carts?.length}
                  </span>
                  <span className="font-semibold text-sm">
                    {total.toFixed(2)}$
                  </span>
                </div>
                <div>
                  <label className="font-medium inline-block mb-3 text-sm uppercase">
                    Shipping
                  </label>
                  <select className="block p-2 text-gray-600 w-full text-sm">
                    <option>Standard shipping - $10.00</option>
                  </select>
                </div>
                <div className="py-10">
                  <label
                    htmlFor="promo"
                    className="font-semibold inline-block mb-3 text-sm uppercase"
                  >
                    Promo Code
                  </label>
                  <input
                    type="text"
                    id="promo"
                    placeholder="Enter your code"
                    className="p-2 text-sm w-full"
                  />
                </div>
                <Button
                  as={NextLink}
                  className="rounded-md text-default-50 bg-default-800 w-full uppercase"
                  href="/checkout"
                >
                  Checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
