"use server";

import envConfig from "@/config/envConfig";
import { delay } from "@/utils/delay";

const fetchOption = {
  next: {
    tags: ["products"],
    cache: "no",
  },
};
export const getRecentProducts = async () => {
  const res = await fetch(`${envConfig.baseApi}/products?limit=8`, fetchOption);

  delay(10000);
  return res.json();
};
export const getAllProducts = async () => {
  const res = await fetch(`${envConfig.baseApi}/products`, fetchOption);

  delay(10000);
  return res.json();
};
export const getSingleProduct = async (id: string) => {
  const res = await fetch(`${envConfig.baseApi}/products/${id}`, fetchOption);
  return res.json();
};
