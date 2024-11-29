"use client";
import { Button } from "@nextui-org/react";
import React from "react";

export default function BannerButton() {
  return (
    <div className="mt-8 flex flex-wrap justify-center gap-4">
      <Button
        className="block rounded bg-default-800  text-sm font-medium text-default-50 sm:w-auto"
        href="#"
      >
        Get Started
      </Button>

      <Button
        className="block bg-white rounded text-sm font-medium text-default-800 sm:w-auto"
        href="#"
      >
        Learn More
      </Button>
    </div>
  );
}
