"use client"

import Link from "next/link"
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { SiteLogo } from "@/components/site-logo"
import { Tab, TabList, Tabs } from "@/components/ui/tab"

type RouteMap = {
    [path: string]: string
}

export const SiteHeader = () => {
    const pathname = usePathname()

    // Define routes mapping
    const routes: RouteMap = {
        "/": "home",
        "/about": "about",
        "/uses": "uses",
        "/blog": "blog"
    }

    // Determine which tab should be active based on the current path
    const getActiveTab = (path: string) => {
        return routes[path] || "home"
    }

    // Create state for the active tab value
    const [activeTab, setActiveTab] = useState(getActiveTab(pathname))

    // Update active tab whenever pathname changes
    useEffect(() => {
        setActiveTab(getActiveTab(pathname))
    }, [pathname])

    return (
        <header className="flex justify-between items-center mb-16">
            <Link href="/">
                <SiteLogo />
            </Link>
            <div className="flex items-center gap-1">
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                    <TabList intent='card'>
                        <Link href="/">
                            <Tab value="home">Home</Tab>
                        </Link>
                        <Link href="/about">
                            <Tab value="about">About</Tab>
                        </Link>
                        <Link href="/uses">
                            <Tab value="uses">Uses</Tab>
                        </Link>
                        <Link href="/blog">
                            <Tab value="blog">Blog</Tab>
                        </Link>
                    </TabList>
                </Tabs>
            </div>
        </header>
    )
}