"use client";
import { FaShoppingCart, FaDollarSign, FaBox } from "react-icons/fa";
import DstatCard from "../../DstatCard";
import { IProduct } from "@/types";

const UserStats = ({ orders }: { orders: IProduct[] }) => {
  const totalPurchases = orders?.length || 0;

  // Calculate total amount spent by the user
  const totalSpent = orders
    ?.map((purchase) => purchase?.price * purchase?.quantity)
    ?.reduce((sum, amount) => sum + amount, 0)
    ?.toFixed(2);

  // Calculate total items purchased (quantity)
  const totalItems = orders
    ?.map((purchase) => purchase?.quantity)
    ?.reduce((sum, quantity) => sum + quantity, 0);

  const stats = [
    {
      title: "Total Purchases",
      number: totalPurchases,
      icon: <FaBox size={30} className="text-[#fec022]" />,
      color: "#fff6e6",
    },
    {
      title: "Total Spent",
      number: `$${totalSpent}`,
      icon: <FaDollarSign size={30} className="text-[#5A66F1]" />,
      color: "#EEEFFE",
    },
    {
      title: "Items in Cart",
      number: totalItems,
      icon: <FaShoppingCart size={30} className="text-[#50C878]" />,
      color: "#E6F9EB",
    },
  ];

  return (
    <div className="grid sm:grid-cols-3 gap-6">
      {stats.map((stat) => (
        <DstatCard key={stat.title} {...stat} />
      ))}
    </div>
  );
};

export default UserStats;
