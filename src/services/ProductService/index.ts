"use server";

import axiosInstance from "@/config/axios.config";
import envConfig from "@/config/envConfig";
import { revalidateTag } from "next/cache";

const fetchOptions = {
  next: {
    tags: ["products"],
    cache: "no-store",
  },
};

export const createProduct = async (productData: FormData) => {
  try {
    const { data } = await axiosInstance.post("/items", productData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    revalidateTag("products");
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getRecentProducts = async () => {
  try {
    const { data } = await axiosInstance.get(
      `${envConfig.baseApi}/products?limit=8`
    );
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getAllProducts = async () => {
  try {
    const { data } = await axiosInstance.get(`${envConfig.baseApi}/products`);
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getSingleProduct = async (id: string) => {
  try {
    const { data } = await axiosInstance.get(
      `${envConfig.baseApi}/products/${id}`
    );
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
