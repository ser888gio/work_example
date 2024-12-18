import { ComboboxButton as ButtonPrimitive } from "@headlessui/react";
import { twMerge } from "tailwind-merge";
import * as React from "react";
import { forwardRef } from "react";

const Button = forwardRef<
  React.ElementRef<typeof ButtonPrimitive>,
  React.ComponentProps<typeof ButtonPrimitive>
>(({ className, ...props }, ref) => (
  <ButtonPrimitive
    ref={ref}
    className={twMerge(
      "h-full flex items-center justify-center",
      className
    )}
    {...props}
  />
));
Button.displayName = "Combobox.Button";

export { Button };
