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
  const res = await fetch(`${envConfig.baseApi}/products?limit=6`, fetchOption);

  delay(10000);
  return res.json();
};
