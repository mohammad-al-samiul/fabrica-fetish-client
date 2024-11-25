"use client";
import React, { ReactNode } from "react";
import { NextUIProvider } from "@nextui-org/react";
import Container from "@/components/ui/Container";

export default function Providers({ children }: { children: ReactNode }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
