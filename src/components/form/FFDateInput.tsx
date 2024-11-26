import { DatePicker } from "@nextui-org/react";
import { Controller } from "react-hook-form";

import { IProps } from "./FFInput";

interface IDateProps extends IProps {}

export default function FFDateInput({ name, label }: IDateProps) {
  return (
    <Controller
      name={name}
      render={({ field: { value, ...fields } }) => (
        <DatePicker
          className="min-w-full sm:min-w-[225px]"
          label={label}
          variant="bordered"
          {...fields}
        />
      )}
    />
  );
}
