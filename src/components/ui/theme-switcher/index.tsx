import { SwitchProps, useSwitch, VisuallyHidden } from "@nextui-org/react";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";
import { MoonFilledIcon, SunFilledIcon } from "../icons";
import clsx from "clsx";
export default function ThemeSwitch(props: SwitchProps) {
  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch(props);
  return (
    <div className="flex flex-col gap-2">
      <Component {...getBaseProps()}>
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <div
          {...getWrapperProps()}
          className={slots.wrapper({
            class: clsx([
              "w-auto h-auto",
              "bg-transparent",
              "rounded-lg",
              "flex items-center justify-center",
              "group-data-[selected=true]:bg-transparent",
              "!text-default-500",
              "pt-px",
              "px-0",
              "mx-0",
            ]),
          })}
        >
          {isSelected ? <SunFilledIcon /> : <MoonFilledIcon />}
        </div>
      </Component>
    </div>
  );
}
