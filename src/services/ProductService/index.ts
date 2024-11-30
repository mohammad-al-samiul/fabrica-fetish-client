"use server";

import envConfig from "@/config/envConfig";

const fetchOption = {
  next: {
    tags: ["products"],
    cache: "no",
  },
};
export const getRecentProducts = async () => {
  const res = await fetch(`${envConfig.baseApi}/products?limit=8`, fetchOption);
  return res.json();
};
export const getAllProducts = async () => {
  const res = await fetch(`${envConfig.baseApi}/products`, fetchOption);
  return res.json();
};
export const getSingleProduct = async (id: string) => {
  const res = await fetch(`${envConfig.baseApi}/products/${id}`, fetchOption);
  return res.json();
};
