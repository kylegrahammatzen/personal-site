"use client"

import Link from "next/link"
import { SiteLogo } from "@/components/site-logo"
import { ThemeToggle } from "@/components/theme-toggle"
import { Tab, TabList, Tabs } from "@/components/ui/tab"

export const SiteHeader = () => {
    return (
        <header className="flex justify-between items-center mb-16">
            <Link href="/">
                <SiteLogo />
            </Link>
            <div className="flex items-center gap-1">
                <Tabs defaultValue="home">
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
                    </TabList>
                </Tabs>
                <ThemeToggle />
            </div>
        </header>
    )
}