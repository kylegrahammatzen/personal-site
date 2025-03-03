import { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

const badgeStyles = tv({
    base: [
        // base layout (display, alignment, typography)
        'inline-flex items-center justify-center rounded-md font-medium',
        // ring
        'ring-1 ring-inset'
    ],
    variants: {
        color: {
            gray: [
                // background color
                'bg-gray-50 dark:bg-[#2a2a2a]',
                // text color
                'text-gray-900 dark:text-[#f2f2f2]',
                // ring color
                'ring-gray-300 dark:ring-[#3a3a3a]'
            ],
            red: [
                // background color
                'bg-red-50 dark:bg-[#4e2a2a]',
                // text color
                'text-red-500 dark:text-red-400',
                // ring color
                'ring-red-300 dark:ring-red-500'
            ],
            yellow: [
                // background color
                'bg-yellow-50 dark:bg-[#4e4e2a]',
                // text color
                'text-yellow-800 dark:text-yellow-500',
                // ring color
                'ring-yellow-400 dark:ring-yellow-600'
            ],
            green: [
                // background color
                'bg-green-50 dark:bg-[#2a4e2a]',
                // text color
                'text-green-500 dark:text-green-400',
                // ring color
                'ring-green-400 dark:ring-green-600'
            ],
            blue: [
                // background color
                'bg-blue-50 dark:bg-[#2a2a4e]',
                // text color
                'text-blue-500 dark:text-blue-400',
                // ring color
                'ring-blue-300 dark:ring-blue-600'
            ],
            indigo: [
                // background color
                'bg-indigo-50 dark:bg-[#2a2a4e]',
                // text color
                'text-indigo-500 dark:text-indigo-400',
                // ring color
                'ring-indigo-300 dark:ring-indigo-600'
            ],
            purple: [
                // background color
                'bg-purple-50 dark:bg-[#4e2a4e]',
                // text color
                'text-purple-500 dark:text-purple-400',
                // ring color
                'ring-purple-300 dark:ring-purple-600'
            ],
            pink: [
                // background color
                'bg-pink-50 dark:bg-[#4e2a3a]',
                // text color
                'text-pink-500 dark:text-pink-400',
                // ring color
                'ring-pink-300 dark:ring-pink-600'
            ]
        },
        size: {
            sm: 'px-2 py-0.5 text-xs',
            md: 'px-2.5 py-1 text-sm',
            lg: 'px-3 py-2 text-base'
        }
    },
    defaultVariants: {
        color: 'gray',
        size: 'md'
    }
})

type BadgeProps = ComponentProps<'span'> & {
    color?: 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink'
    size?: 'sm' | 'md' | 'lg'
}

export const Badge = ({ className, color, size, ...props }: BadgeProps) => {
    return (
        <span
            className={badgeStyles({ color, size, className })}
            {...props}
        >
            {props.children}
        </span>
    )
}