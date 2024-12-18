import { Description as DescriptionPrimitive } from "@headlessui/react";
import { cva, VariantProps } from "class-variance-authority";
import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

const descriptionVariants = cva(
  [
    "absolute -bottom-3 right-4 bg-white px-1 gap-1 inline-flex",
  ],
  {
    variants: {
      state: {
        default: "text-neutral-strong",
        error: "text-secondary-strong",
      },
    },
  },
);

// Description is <p> element, but we don't need to expose it to the caller in our design system.
type Props = PropsWithChildren<{} & VariantProps<typeof descriptionVariants>>;

function Description({ state, children }: Props) {
  return (
    <DescriptionPrimitive
      className={twMerge(
        descriptionVariants({
          state,
        }),
      )}
    >
      {children}
    </DescriptionPrimitive>
  );
}

export { Description };
