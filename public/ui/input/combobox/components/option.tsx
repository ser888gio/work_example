import { ComboboxOption as OptionPrimitive } from "@headlessui/react";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const Option = forwardRef<
  React.ElementRef<typeof OptionPrimitive>,
  React.ComponentPropsWithoutRef<typeof OptionPrimitive>
>(({ className, children, ...props }, ref) => (
  <OptionPrimitive
    ref={ref}
    className={twMerge(
      "px-4 py-3 border-b border-neutral justify-start items-start inline-flex hover:bg-neutral-backdrop-hover data-[focus]:bg-neutral-backdrop-active text-neutral-fg text-base w-full disabled:bg-muted disabled:text-muted disabled:cursor-not-allowed",
      className
    )}
    {...props}
  >
    {children}
  </OptionPrimitive>
));
Option.displayName = "Combobox.Option";

export { Option };
