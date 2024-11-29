"use server";

import envConfig from "@/config/envConfig";
import { delay } from "@/utils/delay";

const fetchOption = {
  next: {
    tags: ["products"],
  },
};
export const getRecentPosts = async () => {
  const res = await fetch(`${envConfig.baseApi}/items?limit=6`, fetchOption);

  delay(10000);

  return res.json();
};
