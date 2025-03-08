'use client'

import { Toggle as BaseToggle } from '@base-ui-components/react/toggle'
import { Button } from '@/components/ui/button'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'

type ToggleProps = {
    onPressedChange?: (pressed: boolean, event: Event) => void
    defaultPressed?: boolean
    pressed?: boolean
    disabled?: boolean
    render?: (props: ComponentPropsWithoutRef<typeof Button>, state: { pressed: boolean }) => ReactNode
} & Omit<ComponentPropsWithoutRef<typeof Button>, 'className'>

export const Toggle = (props: ToggleProps) => {
    const { onPressedChange, defaultPressed, pressed, disabled, ...buttonProps } = props

    return (
        <BaseToggle
            onPressedChange={onPressedChange}
            defaultPressed={defaultPressed}
            pressed={pressed}
            disabled={disabled}
            render={(toggleProps) => (
                <Button {...buttonProps} {...toggleProps} />
            )}
        />
    )
}