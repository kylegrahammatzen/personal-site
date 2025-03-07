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
    // Helper function to render a button with consistent styling
    type ButtonProps = {
        icon: React.ReactNode,
        title: string,
        subtitle?: string,
        isEmail?: boolean
    };

    function renderButton(props: ButtonProps) {
        return (
            <Button intent="ghost" className="w-full group transition-colors">
                <div className="flex w-full items-center">
                    <div className="mr-3 flex-shrink-0 size-10 rounded-md bg-[#2a2a2a] flex items-center justify-center grayscale group-hover:grayscale-0 transition-all">
                        {props.icon}
                    </div>
                    <div className="flex flex-col text-left min-w-0 flex-1">
                        {props.isEmail ? (
                            <div className="flex justify-between items-center w-full">
                                <h3 className="font-medium">{props.title}</h3>
                                <span className="text-sm text-gray-600 dark:text-gray-400">{props.subtitle}</span>
                            </div>
                        ) : (
                            <>
                                <h3 className="font-medium">{props.title}</h3>
                                {props.subtitle && (
                                    <div className="text-sm text-gray-600 dark:text-gray-400">
                                        {props.subtitle}
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </Button>
        );
    }

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
                                    {renderButton({
                                        icon: link.icon,
                                        title: link.platform,
                                        subtitle: link.username
                                    })}
                                </Link>
                            </div>
                        );
                    })}

                    {props.email && (
                        <div className={`px-4 ${props.socialLinks.length > 0 ? "border-t border-gray-300 dark:border-[#333333] pt-4" : "pt-0"} pb-0`}>
                            <Link href={`mailto:${props.email.address}`}>
                                {renderButton({
                                    icon: <Mail size={18} />,
                                    title: props.email.label || 'Email',
                                    subtitle: props.email.address,
                                    isEmail: true
                                })}
                            </Link>
                        </div>
                    )}
                </div>
            </Card>
        </SitePageSection>
    )
}