import React, { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      Admin Sidebar
      {children}
    </div>
  );
}
