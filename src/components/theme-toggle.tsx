'use client'

import { useMount } from '@/hooks/use-mount'
import { useTheme } from '@/providers/theme-provider'
import { Moon, Sun } from 'lucide-react'
import { Toggle } from '@/components/ui/toggle'

type ThemeToggleProps = {
    onThemeChange?: (theme: 'light' | 'dark') => void
}

export const ThemeToggle = (props: ThemeToggleProps) => {
    const { theme, setTheme } = useTheme()
    const isMounted = useMount()

    if (!isMounted) {
        return null
    }

    const handleThemeChange = (newTheme: 'light' | 'dark') => {
        setTheme(newTheme)
        props.onThemeChange?.(newTheme)
    }

    const toggleTheme = () => {
        handleThemeChange(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <Toggle
            aria-label="Theme Toggle"
            onPressedChange={() => toggleTheme()}
        >
            {theme === 'light' ? <Sun className="size-4" /> : <Moon className="size-4" />}
        </Toggle>
    )
}