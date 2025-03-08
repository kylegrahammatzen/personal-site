'use client'

import { createContext, use, useEffect, useState } from 'react'

type Theme = 'light' | 'dark' | 'system'

type ThemeProviderProps = {
    children: React.ReactNode
    defaultTheme?: Theme
}

type ThemeContext = {
    theme: Theme
    setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContext | null>(null)

export const useTheme = () => {
    const context = use(ThemeContext)
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
}

export const ThemeProvider = (props: ThemeProviderProps) => {
    const initialTheme = props.defaultTheme ?? 'system'

    const [theme, setTheme] = useState<Theme>(() => {
        if (typeof window !== 'undefined' && initialTheme !== 'system') {
            const storedTheme = localStorage.getItem('theme') as Theme | null
            return storedTheme ?? initialTheme
        }
        return initialTheme
    })

    useEffect(() => {
        const root = window.document.documentElement
        root.classList.remove('light', 'dark')

        if (theme === 'system') {
            const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
                .matches
                ? 'dark'
                : 'light'
            root.classList.add(systemTheme)
        } else {
            root.classList.add(theme)
        }

        if (theme !== 'system') {
            localStorage.setItem('theme', theme)
        }
    }, [theme])

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        const handleChange = () => {
            if (theme === 'system') {
                const root = window.document.documentElement
                root.classList.remove('light', 'dark')
                root.classList.add(mediaQuery.matches ? 'dark' : 'light')
            }
        }

        mediaQuery.addEventListener('change', handleChange)
        return () => mediaQuery.removeEventListener('change', handleChange)
    }, [theme])

    return (
        <ThemeContext.Provider
            value={{
                theme,
                setTheme: (newTheme: Theme) => {
                    setTheme(newTheme)
                    if (newTheme === 'system') {
                        localStorage.removeItem('theme')
                    }
                }
            }}
        >
            {props.children}
        </ThemeContext.Provider>
    )
}