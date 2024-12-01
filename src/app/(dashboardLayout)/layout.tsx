"use client";
import React, { ReactNode, useState } from "react";

import { Layout } from "antd";
import Sidebar from "@/components/ui/dashboard/Sidebar";
import DashboardHeader from "@/components/ui/dashboard/DashboardHeader";

const { Content } = Layout;

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed); // Toggle the sidebar visibility
  };
  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar collapsed={collapsed} />
        <Layout>
          <DashboardHeader toggleSidebar={toggleSidebar} />
          <Content style={{ margin: "16px 16px 0 ", background: "#ffff" }}>
            <div className="p-6 h-full shadow-lg rounded-lg">{children}</div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
