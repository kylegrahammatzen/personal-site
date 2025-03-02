'use client'

import Image from "next/image"
import { useMount } from "@/hooks/use-mount"
import { useTheme } from "@/providers/theme-provider"

export const SiteLogo = () => {
    const { theme } = useTheme()
    const isMounted = useMount()

    if (!isMounted) {
        return null
    }

    return (
        <div className="relative w-16 h-10">
            <Image
                src="/signature.png"
                alt="Kyle's signature"
                width={64}
                height={40}
                className={`object-contain ${theme === "dark" ? "invert" : ""}`}
            />
        </div>
    )
}