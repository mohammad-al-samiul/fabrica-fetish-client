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
}: IProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Textarea {...register(name)} label={label} minRows={6} variant={variant} />
  );
}
