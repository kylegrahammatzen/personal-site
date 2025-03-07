'use client'

import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import { Card } from '@/components/ui/card'
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
            <h2 className="text-lg font-medium">Connect</h2>

            <div className="space-y-2">
                {props.socialLinks.map((link, index) => (
                    <Link
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                    >
                        <Card intent="ghost" className="p-3">
                            <div className="flex items-center gap-3">
                                {link.icon}
                                <span>{link.platform}</span>
                                {link.username && (
                                    <span className="ml-auto text-sm text-gray-600 dark:text-gray-300">
                                        {link.username}
                                    </span>
                                )}
                            </div>
                        </Card>
                    </Link>
                ))}

                {props.email && (
                    <Link href={`mailto:${props.email.address}`} className="block">
                        <Card intent="ghost" className="p-3">
                            <div className="flex items-center justify-between gap-3">
                                <div className="flex items-center gap-3">
                                    <Mail size={18} className="text-gray-600 dark:text-gray-300" />
                                    <span>{props.email.label || 'Email me'}</span>
                                </div>
                                <span className="text-sm text-gray-600 dark:text-gray-300">
                                    {props.email.address}
                                </span>
                            </div>
                        </Card>
                    </Link>
                )}
            </div>
        </SitePageSection>
    )
}