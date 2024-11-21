import { twMerge } from "tailwind-merge";
import { ComboboxOptions as OptionsPrimitive } from "@headlessui/react";
import { forwardRef } from "react";

const Options = forwardRef<
  React.ElementRef<typeof OptionsPrimitive>,
  React.ComponentPropsWithoutRef<typeof OptionsPrimitive>
>(({ className, children, ...props }, ref) => (
  <OptionsPrimitive
    ref={ref}
    className={twMerge(
      "w-[var(--input-width)] bg-white rounded-tl-lg border border-neutral flex-col justify-start items-start inline-flex ",
      className
    )}
    {...props}
  >
    {children}
  </OptionsPrimitive>
));
Options.displayName = "Combobox.Options";

export { Options };
