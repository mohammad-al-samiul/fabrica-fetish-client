import React, { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      Dashboard Navbar
      {children}
    </div>
  );
}
