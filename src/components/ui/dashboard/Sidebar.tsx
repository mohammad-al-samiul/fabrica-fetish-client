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
import { useUser } from "@/context/user.provider";
import { Image } from "@nextui-org/react";

const { Sider } = Layout;

const userMenuItems = [
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
];

const adminMenuItems = [
  {
    key: "1",
    icon: <DashboardOutlined />,
    label: <NextLink href="/admin/dashboard">Dashboard</NextLink>,
  },
  {
    key: "2",
    icon: <ProfileOutlined />,
    label: <NextLink href="/admin/profile">Profile</NextLink>,
  },
  {
    key: "3",
    icon: <ShoppingOutlined />,
    label: <NextLink href="/admin/all-products">Products Management</NextLink>,
  },
  {
    key: "4",
    icon: <ShoppingCartOutlined />,
    label: <NextLink href="/admin/all-orders">All Orders</NextLink>,
  },
  {
    key: "5",
    icon: <WalletOutlined />,
    label: <NextLink href="/admin/all-payments">All Payments</NextLink>,
  },
];

export default function Sidebar({ collapsed }: { collapsed: any }) {
  const { user } = useUser();
  return (
    <>
      <Sider
        collapsed={collapsed}
        // breakpoint="sm"
        // collapsedWidth="0"
        style={{
          background: "#ffff",
        }}
      >
        <NextLink
          href={"/"}
          className="w-full h-[64px] flex justify-center items-center"
        >
          <Image src="/logo.svg" width={50} height={50} alt="logo" />

          <p
            className={`${
              collapsed ? `hidden` : "block text-xl text-default-800 font-bold"
            } `}
          >
            Fabrica Fetish
          </p>
        </NextLink>
        <Menu
          mode="inline"
          theme="light"
          items={user?.role === "admin" ? adminMenuItems : userMenuItems}
        />
      </Sider>
    </>
  );
}
