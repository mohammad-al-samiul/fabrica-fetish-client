"use client";
import { IProduct } from "@/types";
import { Image } from "@nextui-org/react";
import NextLink from "next/link";

import React from "react";

export default function Card({ item }: { item: IProduct }) {
  return (
    <div className="relative w-full bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between">
      {/* Rating Section */}
      <div className="absolute top-2 left-2 z-10 bg-default-100 text-default-900 text-xs font-semibold px-2 py-1 rounded dark:bg-default-200 dark:text-default-800">
        {item.category}
      </div>
      <div className="absolute top-10 left-2 z-10 bg-default-100 text-default-900 text-xs font-semibold px-2 py-1 rounded dark:bg-default-200 dark:text-default-800">
        Ratings: {item?.rating?.rate}
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
      <div className="px-5 pb-3 flex flex-col justify-start">
        <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
          {item.title.slice(0, 50)}
        </h5>

        <div className="flex items-center justify-between mt-3">
          <span className="text-lg font-bold text-gray-900 dark:text-white">
            ${item?.price}
          </span>
          <NextLink
            href={`/products/${item._id}`}
            className="text-white bg-default-800 hover:bg-default-900 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-default-600 dark:hover:bg-default-700"
          >
            Details
          </NextLink>
        </div>
      </div>
    </div>
  );
}
