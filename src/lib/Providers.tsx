"use client";
import React, { ReactNode } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import UserProvider from "@/context/user.provider";

const queryClient = new QueryClient();
export default function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <Toaster position="top-center" />
        <NextUIProvider>{children}</NextUIProvider>
      </UserProvider>
    </QueryClientProvider>
  );
}
