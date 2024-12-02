import type { Metadata } from "next";

import "./globals.css";
import Providers from "@/lib/Providers";

export const metadata: Metadata = {
  title: "Fabrica Fetish",
  description: "An Ecommerce Website",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body suppressHydrationWarning className={`antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
