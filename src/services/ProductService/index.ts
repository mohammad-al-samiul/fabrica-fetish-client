"use server";

import axiosInstance from "@/config/axios.config";
import envConfig from "@/config/envConfig";

export const createProduct = async (productData: FormData) => {
  try {
    const { data } = await axiosInstance.post("/products", productData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getRecentProducts = async () => {
  try {
    const { data } = await axiosInstance.get(
      `${envConfig.baseApi}/products?limit=8&sortBy=createdAt&sortOrder=desc`
    );
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
export const getHomeProducts = async () => {
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

export const updateProduct = async (id: string, productData: FormData) => {
  try {
    const { data } = await axiosInstance.put(
      `${envConfig.baseApi}/products/${id}`,
      productData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const deleteProduct = async (id: string) => {
  try {
    const { data } = await axiosInstance.delete(
      `${envConfig.baseApi}/products/${id}`
    );
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
