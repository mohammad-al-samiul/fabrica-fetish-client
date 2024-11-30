import { DatePicker } from "@nextui-org/date-picker";
import { Controller } from "react-hook-form";
import { startOfToday } from "date-fns";
import { IProps } from "./FFInput";

interface IDateProps extends IProps {}

const today = startOfToday(); // Default date set to the start of today

export default function FFDateInput({ name, label }: IDateProps) {
  return (
    <Controller
      name={name}
      render={({ field: { value, onChange, ...fields } }) => (
        <DatePicker
          className="min-w-full sm:min-w-[225px]"
          label={label}
          // Set the default value as 'today' if no value
          onChange={(date) => onChange(date)} // Update the form state with the selected date
          variant="bordered"
          {...fields}
        />
      )}
    />
  );
}
