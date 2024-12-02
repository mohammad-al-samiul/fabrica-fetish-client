/* eslint-disable prettier/prettier */
"use server";

import { FieldValues } from "react-hook-form";
import { jwtDecode } from "jwt-decode";
import axiosInstance from "@/config/axios.config";
import { IDecodedTokenProps } from "@/types";
import { cookies } from "next/headers";

interface AuthResponse {
  success: boolean;
  data?: {
    accessToken: string;
    refreshToken: string;
  };
  message?: string;
}

export const registerUser = async (userData: FormData) => {
  try {
    const { data } = await axiosInstance.post<AuthResponse>(
      "/auth/register",
      userData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    //console.log("data", data);

    if (!data.success && !data.data) {
      throw new Error(data.message);
    }

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const loginUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post<AuthResponse>(
      "/auth/login",
      userData
    );

    if (!data.success && !data.data) {
      throw new Error(data.message);
    }

    if (data.success && data.data) {
      (await cookies()).set("accessToken", data?.data?.accessToken);
      (await cookies()).set("refreshToken", data?.data?.refreshToken);
    }

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const logout = async () => {
  (await cookies()).delete("accessToken");
  (await cookies()).delete("refreshToken");
};

export const getCurrentUser = async () => {
  const accessToken = (await cookies()).get("accessToken")?.value;

  let decodedToken = null;

  if (accessToken) {
    decodedToken = (await jwtDecode(accessToken)) as IDecodedTokenProps;

    return {
      _id: decodedToken._id,
      name: decodedToken.name,
      email: decodedToken.email,
      role: decodedToken.role,
      profileImg: decodedToken.profileImg,
    };
  }

  return decodedToken;
};

export const getUserProfile = async () => {
  const { data } = await axiosInstance.get("/auth/me");
  return data;
};

export const updateProfile = async (userData: FormData) => {
  const { data } = await axiosInstance.put("/auth/me", userData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};
