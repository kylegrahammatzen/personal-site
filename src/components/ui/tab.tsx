import { Tabs as BaseTabs } from "@base-ui-components/react/tabs";
import { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const tabsStyles = tv({
  slots: {
    // base layout
    root: ["relative"],
    // tab list layout
    list: ["relative z-0 flex gap-2"],
    // individual tab styling
    tab: [
      // base layout
      "relative flex h-8 items-center justify-center px-2 text-sm font-medium whitespace-nowrap",
    ],
    // active tab indicator
    indicator: ["absolute transition-all duration-200 ease-out"],
    // tab panel layout
    panel: ["relative flex"],
  },
  variants: {
    intent: {
      default: {
        tab: [
          // hover
          "hover:text-gray-900 dark:hover:text-white",
          // selected state
          "data-[selected]:text-gray-900 dark:data-[selected]:text-white",
          // disabled state
          "data-[disabled]:text-gray-400 data-[disabled]:cursor-not-allowed",
          // transition
          "transition-colors",
        ],
        // indicator styling
        indicator: ["bottom-0 left-0 h-[2px] bg-gray-900 dark:bg-white"],
      },
      card: {
        tab: [
          // text and border
          "border border-gray-300 rounded-t-md",
          // dark mode text and border
          "dark:border-[#3a3a3a]",
          // selected state border
          "data-[selected]:border-b-transparent",
          // hover state
          "hover:bg-gray-100 dark:hover:bg-[#252525]",
          // disabled state
          "data-[disabled]:text-gray-400 data-[disabled]:cursor-not-allowed",
        ],
        // indicator styling
        indicator: [
          // position and background
          "top-0 left-0 h-full rounded-md bg-gray-100 dark:bg-[#18181b]",
          // border
          "border border-gray-300 dark:border-[#3a3a3a]",
          // shadow and z-index
          "shadow-sm dark:shadow-md z-[-1]",
        ],
      },
    },
  },
  defaultVariants: {
    intent: "default",
  },
});

type TabsRootProps = ComponentProps<typeof BaseTabs.Root> & {
  className?: string;
};

export const Tabs = ({ className, ...props }: TabsRootProps) => {
  const { root } = tabsStyles();
  return <BaseTabs.Root className={root({ className })} {...props} />;
};

type TabListProps = ComponentProps<typeof BaseTabs.List> &
  VariantProps<typeof tabsStyles> & {
    className?: string;
  };

export const TabList = ({
  className,
  intent = "default",
  children,
  ...props
}: TabListProps) => {
  const { list, indicator } = tabsStyles({ intent });

  return (
    <BaseTabs.List className={list({ className })} {...props}>
      {children}
      <BaseTabs.Indicator
        className={indicator()}
        style={{
          width: "var(--active-tab-width)",
          transform: "translateX(var(--active-tab-left))",
          transitionProperty: "width, transform",
        }}
      />
    </BaseTabs.List>
  );
};

type TabProps = ComponentProps<typeof BaseTabs.Tab> &
  VariantProps<typeof tabsStyles> & {
    className?: string;
  };

export const Tab = ({
  className,
  intent = "default",
  disabled,
  ...props
}: TabProps) => {
  const isDisabled = disabled === true;
  const { tab } = tabsStyles({ intent });

  return (
    <BaseTabs.Tab
      className={tab({
        className: `${isDisabled ? "pointer-events-none cursor-not-allowed select-none opacity-50" : ""} ${className || ""}`,
      })}
      {...props}
      aria-disabled={isDisabled}
      tabIndex={isDisabled ? -1 : undefined}
    />
  );
};

type TabPanelProps = ComponentProps<typeof BaseTabs.Panel> & {
  className?: string;
};

export const TabPanel = ({ className, ...props }: TabPanelProps) => {
  const { panel } = tabsStyles();
  return <BaseTabs.Panel className={panel({ className })} {...props} />;
};
