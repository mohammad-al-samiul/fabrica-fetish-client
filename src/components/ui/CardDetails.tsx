"use client";
import { CartContext } from "@/context/cart.provider";

import { IProduct } from "@/types";
import { Button, Image } from "@nextui-org/react";

import React, { useContext } from "react";
import { toast } from "sonner";

interface CartItem extends IProduct {
  quantity: number;
  id: string;
}
export default function CardDetails({ product }: { product: IProduct }) {
  const cartContext = useContext(CartContext);

  // Check if context is undefined and throw an error (or handle as needed)
  if (!cartContext) {
    throw new Error("CartContext is not available!");
  }

  const { setCarts } = cartContext;

  // Type for handleCart function
  const handleAddToCart = (product: IProduct): void => {
    const carts: CartItem[] = JSON.parse(localStorage.getItem("carts") || "[]");

    const isProductExist = carts.find((item) => item._id === product._id);

    if (isProductExist) {
      toast.error("Product already added in cart");

      return;
    } else {
      localStorage.setItem(
        "carts",
        JSON.stringify([...carts, { ...product, quantity: 1 }])
      );

      const updatedCart = JSON.parse(localStorage.getItem("carts") || "[]");
      setCarts(updatedCart);
      toast.success("Product added to cart successfully!");
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg my-10">
      <div className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className=" mx-auto flex flex-wrap">
            {/* Image Section */}
            <div className="lg:w-1/3 w-full lg:h-auto object-cover object-center rounded">
              <Image
                width={400}
                height={400}
                alt={product?.title}
                className="w-full object-contain rounded"
                src={product?.image}
              />
            </div>

            {/* Text & Product Details Section */}
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {product?.category}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product?.title}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center font-bold">
                  Rating: {product?.rating?.rate}
                  <span className="text-gray-600 ml-3">
                    {product?.rating?.count} Reviews
                  </span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed">{product?.description}</p>

              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <p className="font-bold"> quantity : {product?.quantity}</p>
              </div>

              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ${product?.price}
                </span>
                <Button
                  onClick={() => handleAddToCart(product)}
                  className="flex ml-auto text-white bg-default-800 border-0 py-2 px-6 focus:outline-none hover:bg-default-900 rounded"
                >
                  Add to Cart
                </Button>
                {/* <Button
                  onClick={() => handleAddToCart(product)}
                  className="flex ml-3 text-white bg-slate-500 border-0 py-2 px-6 focus:outline-none hover:bg-slate-600 rounded"
                >
                  Add to Cart
                </Button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
