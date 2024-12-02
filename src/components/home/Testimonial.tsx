"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

import user1 from "@/assets/user/user-1.png";
import user2 from "@/assets/user/user-2.png";
import user3 from "@/assets/user/user-3.png";
import user4 from "@/assets/user/user-4.jpg";
import user5 from "@/assets/user/user-5.jpg";

// Sample data for the testimonials
const testimonials = [
  {
    id: 1,
    name: "John Doe",
    imageUrl: user1,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    role: "Verified Buyer",
  },
  {
    id: 2,
    name: "Jane Smith",
    imageUrl: user2,
    review:
      "Great product! Totally exceeded my expectations. Highly recommend to everyone.",
    role: "Verified Buyer",
  },
  {
    id: 3,
    name: "Mark Wilson",
    imageUrl: user3,
    review: "The service was fantastic! I'll definitely come back for more.",
    role: "Verified Buyer",
  },
  {
    id: 4,
    name: "Sarah Brown",
    imageUrl: user4,
    review: "Amazing experience, customer service was top-notch!",
    role: "Verified Buyer",
  },
  {
    id: 5,
    name: "David Clark",
    imageUrl: user5,
    review: "Highly satisfied with the purchase, will buy again.",
    role: "Verified Buyer",
  },
];

export default function Testimonial() {
  return (
    <section className="py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">
        What Our Customers Say
      </h2>

      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={3} // Default for large screens
        spaceBetween={30}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          380: {
            slidesPerView: 1, // Mobile: 1 slide
          },
          768: {
            slidesPerView: 2, // Tablets: 2 slides
          },
          1024: {
            slidesPerView: 3, // Desktop: 3 slides
          },
        }}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 w-full sm:h-[250px] md:h-[230px] flex flex-col justify-between">
              <p className="text-sm sm:text-base md:text-lg italic">
                "{testimonial.review}"
              </p>
              <div className="mt-4 flex items-center space-x-4">
                <Image
                  src={testimonial.imageUrl}
                  alt={`Customer ${testimonial.name}`}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-xs sm:text-sm md:text-base font-semibold">
                    {testimonial.name}
                  </h3>
                  <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
