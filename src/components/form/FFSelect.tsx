import { Select, SelectItem } from "@nextui-org/react";
import { useFormContext } from "react-hook-form";

import { IProps } from "./FFInput";

interface ISelectProps extends IProps {
  options: {
    key: string;
    label: string;
  }[];
  disabled?: boolean;
}

export default function FFSelect({
  options,
  label,
  name,
  disabled,
}: ISelectProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Select
      {...register(name)}
      className="min-w-full sm:min-w-[225px]"
      items={options}
      label={label}
      variant="bordered"
      isDisabled={disabled}
      // placeholder="Select a District"
    >
      {(options) => <SelectItem key={options.key}>{options.label}</SelectItem>}
    </Select>
  );
}
