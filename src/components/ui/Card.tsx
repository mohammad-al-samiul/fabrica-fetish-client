"use client";
import { IProduct } from "@/types";
import { Image, Link } from "@nextui-org/react";

import React from "react";

export default function Card({ item }: { item: IProduct }) {
  return (
    <div className="relative w-full h-[390px] bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between">
      {/* Rating Section */}
      <div className="absolute top-2 left-2 z-10 bg-blue-100 text-blue-900 text-xs font-semibold px-2 py-1 rounded dark:bg-blue-200 dark:text-blue-800">
        Ratings: {item.rating.rate}
      </div>

      {/* Image Section */}
      <div className="flex justify-center items-center h-[200px] relative">
        <Image
          height={200} // Adjust the height of the image
          width={200} // Adjust the width of the image
          src={item?.image}
          alt={item?.title}
          className="object-contain z-0"
        />
      </div>

      {/* Content Section */}
      <div className="px-5 pb-5 flex flex-col h-full justify-between">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {item.title}
        </h5>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            ${item?.price}
          </span>
          <Link
            href={`/products/${item._id}`}
            className="text-white bg-default-800 hover:bg-default-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </Link>
        </div>
      </div>
    </div>
  );
}
