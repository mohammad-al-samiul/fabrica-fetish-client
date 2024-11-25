"use client";

import { Button } from "@nextui-org/react";

export default function Banner() {
  return (
    <section
      className="bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url("/bg_hero.svg")` }}
    >
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl text-default-700 font-extrabold sm:text-5xl">
            Elevate Your Online Store
            <strong className="font-extrabold text-default-700 sm:block">
              Seamless Shopping, Sky-High Sales
            </strong>
          </h1>

          <p className="mt-4 text-default-700 sm:text-xl/relaxed">
            Transform your e-commerce vision into reality. Our platform empowers
            you to create stunning online stores that drive conversions and
            boost your bottom line.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              className="block rounded bg-default-800 text-sm font-medium text-default-50 sm:w-auto"
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
        </div>
      </div>
    </section>
  );
}
