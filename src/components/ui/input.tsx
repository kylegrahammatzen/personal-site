import { Input as BaseInput } from '@base-ui-components/react/input'
import { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'
import { cn } from '@/lib/utils'

const inputStyles = tv({
    base: [
        // base
        'block rounded-md border text-sm px-3 py-1.5',
        // background color
        'bg-gray-50 dark:bg-[#2a2a2a]',
        // text color
        'text-gray-900 dark:text-[#f2f2f2] placeholder:text-gray-400 dark:placeholder:text-gray-500',
        // border
        'border-gray-300 dark:border-[#3a3a3a]',
        // focus
        'focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-[#3a3a3a] focus:border-gray-300 dark:focus:border-[#3a3a3a]',
        // disabled
        'disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed disabled:opacity-50 dark:disabled:bg-[#3a3a3a] dark:disabled:placeholder:text-gray-600'
    ]
})

type InputProps = ComponentProps<typeof BaseInput>

export const Input = (props: InputProps) => {
    const { className, ...rest } = props
    return (
        <BaseInput
            className={cn(inputStyles(), className)}
            {...rest}
        />
    )
}