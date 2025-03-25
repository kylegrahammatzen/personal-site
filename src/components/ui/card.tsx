import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

export const card = tv({
  slots: {
    base: [
      "grid gap-3 rounded-md shadow-xs p-4",
      // disabled state
      "disabled:opacity-50 disabled:pointer-events-none",
      // transition
      "transition-none",
    ],
    title: "text-lg font-semibold leading-tight tracking-tight",
    description: "text-sm",
  },
  variants: {
    intent: {
      default: {
        base: [
          // background color
          "bg-gray-50 dark:bg-[#18181b]",
          // text color
          "text-gray-900 dark:text-[#f2f2f2]",
          // border color
          "border border-gray-300 dark:border-[#3a3a3a]",
          // shadow
          "shadow-xs dark:shadow-md",
        ],
        description: "text-gray-600 dark:text-gray-300",
      },
      ghost: {
        base: [
          // background color
          "bg-transparent",
          // text color
          "text-gray-900 dark:text-[#f2f2f2]",
          // no border
          "border-0",
          // no shadow
          "shadow-none",
          // hover
          "hover:bg-gray-100 dark:hover:bg-[#252525]",
        ],
        description: "text-gray-500 dark:text-gray-400",
      },
    },
    size: {
      sm: { base: "p-2 gap-2" },
      md: { base: "p-4 gap-3" },
      lg: { base: "p-6 gap-4" },
    },
  },
  defaultVariants: {
    intent: "default",
    size: "md",
  },
});

type CardProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof card> & {
    title?: string;
    description?: string;
    className?: string;
  };

export const Card = (props: CardProps) => {
  const { title, description, className, intent, size, ...rest } = props;
  const styles = card({ intent, size });

  return (
    <div className={cn(styles.base(), className)} {...rest}>
      {(title ?? description) && (
        <div>
          {title && <h2 className={styles.title()}>{title}</h2>}
          {description && <p className={styles.description()}>{description}</p>}
        </div>
      )}
      {props.children}
    </div>
  );
};
