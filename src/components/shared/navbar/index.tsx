"use client";
import { siteConfig } from "@/config/site";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  Image,
  NavbarItem,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  Link,
  NavbarMenuItem,
} from "@nextui-org/react";
import NextLink from "next/link";
import React, { useContext, useEffect, useState } from "react";
import clsx from "clsx";
import { link as linkStyles } from "@nextui-org/theme";
import ThemeSwitch from "@/components/ui/theme-switcher";
import NavbarDropdown from "./NavbarDropdown";
import { useUser } from "@/context/user.provider";
import { CartContext } from "@/context/cart.provider";

export default function Navbar() {
  const [localCarts, setLocalCarts] = useState([]);
  const { user } = useUser();

  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("CartContext is not available!");
  }

  const { carts } = cartContext;
  useEffect(() => {
    const savedCarts = JSON.parse(localStorage.getItem("carts") ?? "[]");
    setLocalCarts(savedCarts);
  }, [carts]);

  useEffect(() => {
    const header = document.querySelector("header");
    if (header) {
      header.classList.add("nav-zero-padding");
    }
  }, []);
  return (
    <NextUINavbar maxWidth="full" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image src="/logo.svg" width={50} height={50} alt="logo" />
            <p className="font-bold text-inherit">Fabrica Fetish</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem>
          <NextLink href="/carts">
            <label tabIndex={0} className="relative cursor-pointer">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="absolute top-0 right-0 bg-gray-600 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {carts?.length ? carts?.length : localCarts.length}
                </span>
              </div>
            </label>
          </NextLink>
        </NavbarItem>
        {user?.email ? (
          <>
            <NavbarItem className="hidden sm:flex gap-2">
              <NavbarDropdown />
            </NavbarItem>
          </>
        ) : (
          <>
            <NavbarItem>
              <Button as={NextLink} href={"/login"}>
                Login
              </Button>
            </NavbarItem>
            <NavbarItem>
              <Button as={NextLink} href="/register">
                Sign Up
              </Button>
            </NavbarItem>
          </>
        )}
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        {/* <ThemeSwitch /> */}
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === siteConfig.navMenuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
}
