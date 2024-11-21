import { Label as LabelPrimitive } from "@headlessui/react";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

//need to add font Inter and create custom label text

const labelVariants = cva(
  [
    "absolute left-4 uppercase px-1",
    "font-bold",
    "bg-white",
    "text-base",
    "peer-data-[empty=false]:ml-0",
    "peer-data-[focus]:ml-0",
    "peer-data-[empty=false]:text-xs",
    "peer-data-[focus]:text-xs",
    "peer-data-[focus]:translate-y-[-120%] transition-all duration-200",
    "peer-data-[empty=false]:translate-y-[-120%] transition-all duration-200",
  ],
  {
    variants: {
      state: {
        default: "text-neutral-strong",
        error: "text-secondary-strong",
      },
      hasIcon: {
        true: "ml-10 peer-data-[focus]:pl-1 peer-data-[empty=false]:pl-1",
      },
    },
    defaultVariants: {
      state: "default",
      hasIcon: false,
    },
  },
);

const Label = forwardRef<
  React.ElementRef<typeof LabelPrimitive>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive> &
    VariantProps<typeof labelVariants>
>(({ className, state, hasIcon, ...props }, ref) => (
  <LabelPrimitive
    ref={ref}
    className={twMerge(
      labelVariants({
        state,
        hasIcon,
      }),
      className,
    )}
    {...props}
  />
));
Label.displayName = LabelPrimitive.displayName;

export { Label };
