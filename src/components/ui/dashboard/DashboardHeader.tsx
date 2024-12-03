"use client";
import React from "react";
import { Button, Layout, theme } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const { Header } = Layout;
export default function DashboardHeader({
  toggleSidebar,
}: {
  toggleSidebar: any;
}) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <Header
        style={{
          padding: "0 16px",
          background: colorBgContainer,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          onClick={toggleSidebar}
          className="block lg:hidden text-lg bg-default-200 px-2 py-1 rounded-lg"
        >
          <MenuOutlined />
        </div>
        <div></div>

        {/* <h3 style={{ margin: 0 }}>Dashboard</h3> */}
      </Header>
    </>
  );
}
