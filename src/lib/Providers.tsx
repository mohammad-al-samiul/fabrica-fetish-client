"use client";
import React, { ReactNode } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import UserProvider from "@/context/user.provider";
import ContextCartProvider from "@/context/cart.provider";

const queryClient = new QueryClient();
export default function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <ContextCartProvider>
          <Toaster position="top-center" />
          <NextUIProvider>{children}</NextUIProvider>
        </ContextCartProvider>
      </UserProvider>
    </QueryClientProvider>
  );
}
