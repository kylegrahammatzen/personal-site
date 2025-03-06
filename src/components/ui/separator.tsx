import { ComponentProps } from "react";
import { Separator as BaseSeparator } from "@base-ui-components/react/separator";
import { tv } from "tailwind-variants";

const separatorVariants = tv({
  base: "",
  variants: {
    orientation: {
      horizontal: "bg-gray-300 dark:bg-[#18181b] h-[2px] w-full my-2",
      vertical: "bg-gray-300 dark:bg-[#18181b] w-[2px] mx-2",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

type SeparatorProps = ComponentProps<typeof BaseSeparator> & {
  orientation?: "horizontal" | "vertical";
};

export const Separator = (props: SeparatorProps) => {
  return (
    <BaseSeparator
      {...props}
      className={`${separatorVariants({ orientation: props.orientation || "horizontal" })} ${props.className || ""}`}
    />
  );
};
