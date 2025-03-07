'use client'

import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Twitter, Linkedin, Dribbble, Github, Mail } from "lucide-react"
import { SitePageSection } from '@/components/site-page-section'

type SiteSocialLink = {
    platform: string
    url: string
    icon: React.ReactNode
    username?: string
}

type SiteConnectSectionProps = {
    socialLinks: SiteSocialLink[]
    email?: {
        address: string
        label?: string
    }
}

export function SiteConnectSection(props: SiteConnectSectionProps) {
    return (
        <SitePageSection className="mb-16">
            <h2 className="text-md font-medium mb-4">Connect</h2>
            <Card>
                <div className="flex flex-col -mx-4">
                    {props.socialLinks.map((link, index) => {
                        const isFirstItem = index === 0;
                        const isLastItem = index === props.socialLinks.length - 1 && !props.email;

                        const itemClasses = [
                            !isLastItem && "border-b border-gray-300 dark:border-[#333333]",
                            isFirstItem ? "pt-0 pb-4" : isLastItem ? "pt-4 pb-0" : "py-4",
                            "px-4"
                        ].filter(Boolean).join(" ");

                        return (
                            <div key={index} className={itemClasses}>
                                <Link href={link.url} target="_blank" rel="noopener noreferrer">
                                    <Button intent="ghost" className="h-full w-full p-0 group hover:bg-[#252525] transition-colors">
                                        <div className="flex w-full items-center p-4">
                                            <div className="mr-4 flex-shrink-0 size-12 rounded-md bg-[#2a2a2a] flex items-center justify-center grayscale group-hover:grayscale-0 transition-all">
                                                {link.icon}
                                            </div>
                                            <div className="flex flex-col text-left min-w-0 flex-1">
                                                <h3 className="font-medium">{link.platform}</h3>
                                                {link.username && (
                                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                                        {link.username}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </Button>
                                </Link>
                            </div>
                        );
                    })}

                    {props.email && (
                        <div className={`px-4 ${props.socialLinks.length > 0 ? "border-t border-gray-300 dark:border-[#333333] pt-4" : "pt-0"} pb-0`}>
                            <Link href={`mailto:${props.email.address}`}>
                                <Button intent="ghost" className="h-full w-full p-0 group hover:bg-[#252525] transition-colors">
                                    <div className="flex w-full items-center p-4">
                                        <div className="mr-4 flex-shrink-0 size-12 rounded-md bg-[#2a2a2a] flex items-center justify-center grayscale group-hover:grayscale-0 transition-all">
                                            <Mail size={20} />
                                        </div>
                                        <div className="flex flex-col text-left min-w-0 flex-1">
                                            <h3 className="font-medium">{props.email.label || 'Email'}</h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                {props.email.address}
                                            </p>
                                        </div>
                                    </div>
                                </Button>
                            </Link>
                        </div>
                    )}
                </div>
            </Card>
        </SitePageSection>
    )
}