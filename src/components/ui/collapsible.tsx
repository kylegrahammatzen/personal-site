import { ComponentPropsWithoutRef } from 'react'
import { Collapsible as BaseCollapsible } from '@base-ui-components/react/collapsible'
import { tv, type VariantProps } from 'tailwind-variants'
import { cn } from '@/lib/utils'

const collapsible = tv({
    slots: {
        root: [
            // base layout
            'flex min-h-36 w-56 flex-col justify-center',
            // text
            'text-sm'
        ],
        trigger: [
            // base layout
            'group flex items-center gap-2 px-2 py-1',
            // interaction
            'focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed'
        ],
        panel: [
            // base layout
            'h-[var(--collapsible-panel-height)]',
            // interaction
            'overflow-hidden transition-all ease-out',
            // animation states
            'data-[ending-style]:h-0 data-[starting-style]:h-0'
        ],
        content: [
            // base layout
            'mt-1 flex flex-col gap-2 py-2 pl-7 rounded-sm',
            // background color
            'bg-gray-100 dark:bg-[#2a2a2a]',
            // interaction
            'cursor-text'
        ]
    }
})

type CollapsibleVariants = VariantProps<typeof collapsible>

type CollapsibleProps = ComponentPropsWithoutRef<typeof BaseCollapsible.Root> &
    CollapsibleVariants & {
        className?: string
    }

export const Collapsible = (props: CollapsibleProps) => {
    const slots = collapsible()
    return (
        <BaseCollapsible.Root
            className={slots.root({ className: props.className })}
            {...props}
        >
            {props.children}
        </BaseCollapsible.Root>
    )
}

type CollapsibleTriggerProps = ComponentPropsWithoutRef<
    typeof BaseCollapsible.Trigger
> & {
    className?: string
}

export const CollapsibleTrigger = (props: CollapsibleTriggerProps) => {
    const slots = collapsible()
    const { className, ...rest } = props
    return (
        <BaseCollapsible.Trigger
            className={cn(slots.trigger(), className)}
            {...rest}
        >
            {props.children}
        </BaseCollapsible.Trigger>
    )
}

type CollapsiblePanelProps = ComponentPropsWithoutRef<
    typeof BaseCollapsible.Panel
> & {
    className?: string
}

export const CollapsiblePanel = (props: CollapsiblePanelProps) => {
    const slots = collapsible()
    return (
        <BaseCollapsible.Panel
            className={slots.panel({ className: props.className })}
            {...props}
        >
            {/* <div className={slots.content()}>{props.children}</div> */}
            {props.children}
        </BaseCollapsible.Panel>
    )
}