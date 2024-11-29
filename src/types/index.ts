import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface IDecodedTokenProps {
  _id: string;
  name: string;
  email: string;
  profileImg: string;
  role: "admin" | "user";
  phone?: string; // Optional, as it might not always be present
}

export interface IUser {
  _id: string;
  name: string;
  role: string;
  email: string;
  phone?: number;
  profileImg?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface IProduct {
  _id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image?: string;
  rating: IRating;
}

export interface IRating {
  rate: number;
  count: number;
}
