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
import React, { useEffect } from "react";
import clsx from "clsx";
import { link as linkStyles } from "@nextui-org/theme";
import ThemeSwitch from "@/components/ui/theme-switcher";
import NavbarDropdown from "./NavbarDropdown";

export default function Navbar() {
  // const user = {
  //   email: "alsam",
  // };
  const user = undefined;

  useEffect(() => {
    const header = document.querySelector("header");
    if (header) {
      header.classList.add("p-0");
    }
  }, []);
  return (
    <NextUINavbar maxWidth="full" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            {/* <Image src="" width={50} height={50} alt="logo" /> */}
            <p className="font-bold text-inherit">ACME</p>
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
