import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

export const buttonStyles = tv({
    base: [
        // base layout (display, alignment, typography)
        'inline-flex w-fit items-center justify-center font-medium rounded-md',
        // disabled state
        'disabled:opacity-50 disabled:pointer-events-none',
        // transition
        'transition-none'
    ],
    variants: {
        intent: {
            default: [
                // background color
                'bg-gray-100 dark:bg-[#2a2a2a]',
                // text color
                'text-gray-900 dark:text-[#f2f2f2]',
                // border color
                'border border-gray-300 dark:border-[#3a3a3a]',
                // hover background color
                'hover:bg-gray-200 dark:hover:bg-[#252525]',
                // focus
                'focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-300',
                'dark:focus:ring-[#3a3a3a] dark:focus:border-[#3a3a3a]',
                // shadow
                'shadow-sm dark:shadow-md'
            ],
            ghost: [
                // background color
                'bg-transparent',
                // border color
                'border border-transparent',
                // hover background color
                'hover:bg-gray-100 dark:hover:bg-[#252525]',
            ]
        },
        size: {
            sm: 'px-2 py-1 text-xs',
            md: 'px-3 py-1.5 text-sm',
            lg: 'px-4 py-2 text-base'
        }
    },
    defaultVariants: {
        intent: 'default',
        size: 'md'
    }
})

type ButtonVariantProps = VariantProps<typeof buttonStyles>
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
    ButtonVariantProps & {
        className?: string
    }

export const Button = ({ className, ...props }: ButtonProps) => {
    return (
        <button
            className={cn(buttonStyles(props), className)}
            {...props}
        >
            {props.children}
        </button>
    )
}