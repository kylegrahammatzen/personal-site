'use client'

import { ComponentPropsWithRef } from 'react'
import { tv } from 'tailwind-variants'
import { cn } from '@/lib/utils'
import { Avatar as BaseAvatar } from '@base-ui-components/react/avatar'

const avatarStyles = tv({
    slots: {
        root: [
            // base
            'relative flex shrink-0 overflow-hidden rounded-md',
        ],
        image: [
            'size-10',
            // base
            'pointer-events-none aspect-square',
        ],
        fallback: [
            // base
            'flex items-center justify-center rounded-md',
            // background color
            'bg-gray-100 dark:bg-gradient-to-b dark:from-[#2a2a2a] dark:to-[#4e4e4e]',
            // text color
            'text-gray-900 dark:text-[#f2f2f2]',
            // border
            'ring-1 ring-gray-300 dark:ring-0 dark:ring-gray-700'
        ]
    }
})

export type AvatarProps = ComponentPropsWithRef<typeof BaseAvatar.Root>

export const Avatar = (props: AvatarProps) => {
    const { root } = avatarStyles()
    return <BaseAvatar.Root className={cn(root(), props.className)} {...props} />
}

export type AvatarImageProps = ComponentPropsWithRef<typeof BaseAvatar.Image>

export const AvatarImage = (props: AvatarImageProps) => {
    const { image } = avatarStyles()
    return <BaseAvatar.Image className={cn(image(), props.className)} {...props} />
}

export type AvatarFallbackProps = ComponentPropsWithRef<typeof BaseAvatar.Fallback>

export const AvatarFallback = (props: AvatarFallbackProps) => {
    const { fallback } = avatarStyles()
    return <BaseAvatar.Fallback className={cn(fallback(), props.className)} {...props} />
}