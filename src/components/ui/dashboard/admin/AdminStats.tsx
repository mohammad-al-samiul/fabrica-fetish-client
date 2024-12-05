"use client";
import { RiShoppingCartFill, RiUserFill } from "react-icons/ri";
import { BiPackage, BiDollarCircle } from "react-icons/bi";
import DstatCard from "../../DstatCard";

interface IProps {
  totalProducts: number;
  totalOrders: number;
  totalRevenue: number;
  totalUser: number;
}
export default function AdminStats({
  totalProducts,
  totalOrders,
  totalRevenue,
  totalUser,
}: IProps) {
  const items = [
    {
      title: "Total Products",
      number: totalProducts,
      icon: <BiPackage size={30} className="text-3xl text-[#22C55E]" />,
      color: "#E8F9EF",
    },
    {
      title: "Total Revenue",
      number: totalRevenue,
      icon: <BiDollarCircle size={30} className="text-3xl text-[#5A66F1]" />,
      color: "#EEEFFE",
      prefix: "$",
    },
    {
      title: "Total Orders",
      number: totalOrders,
      icon: (
        <RiShoppingCartFill size={30} className="text-3xl text-[#fec022]" />
      ),
      color: "#fec02225",
    },
    {
      title: "Total Users",
      number: totalUser,
      icon: <RiUserFill size={30} className="text-3xl text-[#60A5FA]" />,
      color: "#EFF6FE",
    },
  ];

  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-2 sm:gap-6 gap-4">
      {items?.map((item) => (
        <DstatCard key={item?.title} {...item} />
      ))}
    </div>
  );
}
