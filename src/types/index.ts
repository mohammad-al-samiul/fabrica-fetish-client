import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface IDecodedTokenProps {
  _id: string;
  name: string;
  email: string;
  mobileNumber: string;
  role: "admin" | "user";
  status: string;
  profilePhoto?: string; // Optional, as it might not always be present
}
