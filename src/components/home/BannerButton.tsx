"use client";
import { Button } from "@nextui-org/react";
import React from "react";
import NextLink from "next/link";
import { useRouter } from "next/navigation";

export default function BannerButton() {
  const router = useRouter();
  return (
    <div className="mt-8 flex flex-wrap justify-center gap-4">
      <Button
        onClick={() => router.push("/products")}
        className="block rounded bg-default-800  text-sm font-medium text-default-50 sm:w-auto"
      >
        Get Started
      </Button>

      <Button
        onClick={() => router.push("/why-choose-us")}
        className="block bg-white rounded text-sm font-medium text-default-800 sm:w-auto"
      >
        Learn More
      </Button>
    </div>
  );
}
