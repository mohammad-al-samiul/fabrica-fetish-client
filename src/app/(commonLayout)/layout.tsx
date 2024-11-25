import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar";
import Container from "@/components/ui/Container";
import React, { ReactNode } from "react";

export default function CommonLayout({ children }: { children: ReactNode }) {
  return (
    <Container>
      <Navbar />
      {children}
      <Footer />
    </Container>
  );
}
