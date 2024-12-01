"use client";
import {
  DashboardOutlined,
  ProfileOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  WalletOutlined,
} from "@ant-design/icons";
import NextLink from "next/link";
import { Layout, Menu } from "antd";
import React from "react";

const { Sider } = Layout;

const menuItems = [
  {
    key: "1",
    icon: <DashboardOutlined />,
    label: <NextLink href="/user/dashboard">Dashboard</NextLink>,
  },
  {
    key: "2",
    icon: <ProfileOutlined />,
    label: <NextLink href="/user/profile">Profile</NextLink>,
  },
  {
    key: "3",
    icon: <ShoppingOutlined />,
    label: <NextLink href="/user/all-products">Products</NextLink>,
  },
  {
    key: "4",
    icon: <ShoppingCartOutlined />,
    label: <NextLink href="/user/my-orders">Orders</NextLink>,
  },
  {
    key: "5",
    icon: <WalletOutlined />,
    label: <NextLink href="/user/my-payments">Payment History</NextLink>,
  },
];
export default function Sidebar({ collapsed }: { collapsed: any }) {
  return (
    <>
      <Sider
        collapsed={collapsed}
        breakpoint="sm"
        collapsedWidth="0"
        style={{
          background: "#ffff",
        }}
      >
        <div className="w-full h-[64px] flex justify-center items-center">
          <NextLink href="/">
            <p className="text-xl text-default-800 font-bold">Fabrica Fetish</p>
          </NextLink>
        </div>
        <Menu
          mode="inline"
          theme="light"
          defaultSelectedKeys={["1"]}
          items={menuItems}
        />
      </Sider>
    </>
  );
}
