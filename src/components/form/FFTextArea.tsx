import { Textarea } from "@nextui-org/input";
import { useFormContext } from "react-hook-form";
import { IProps } from "./FFInput";

interface ITextAreaProps extends IProps {
  type?: string;
}

export default function FFTextarea({
  name,
  label,
  variant = "bordered",
  required = false,
}: IProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Textarea
      {...register(name)}
      errorMessage={errors[name] ? (errors[name].message as string) : ""}
      isInvalid={!!errors[name]}
      label={label}
      required={required}
      minRows={3}
      variant={variant}
    />
  );
}
