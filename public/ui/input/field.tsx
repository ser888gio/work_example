import { Field as FieldPrimitive } from "@headlessui/react";
import { PropsWithChildren } from "react";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const fieldVariants = cva(
  [
    "w-full border rounded-md rounded-br-none relative p-4 border-neutral flex gap-2 items-center disabled:border-neutral-disabled focus-within:outline focus-within:outline-offset-2 focus-within:outline-2 focus-within:outline-primary-30",
  ],
  {
    variants: {
      state: {
        default: [
          "text-neutral-muted focus-visible:border-neutral-active",
          "focus-within:border-neutral-active focus-visible:text-neutral-active",
        ],
        error:
          "border-secondary-strong text-secondary-strong hover:border-secondary-hover:not(:focus-within) focus-within:border-secondary-strong focus-visible:border-secondary-strong",
      },
    },
  },
);

type Props = PropsWithChildren<{
  error?: string;
  state?: "default" | "error";
  className?: string;
}>;

function Field({ state, children }: Props) {
  return (
    <FieldPrimitive className={twMerge(fieldVariants({ state }))}>
      {children}
    </FieldPrimitive>
  );
}

export { Field };
