import { SiteContainer } from "@/components/site-container"
import { SitePageHeader } from "@/components/site-page-header"
import { SitePageSection } from "@/components/site-page-section"
import { Card } from "@/components/ui/card"
import { Collapsible, CollapsiblePanel, CollapsibleTrigger } from "@/components/ui/collapsible"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { tv } from "tailwind-variants"

const highlight = tv({
    slots: {
        blue: "text-blue-600 dark:text-blue-400 font-medium"
    }
})

export default function AboutPage() {
    const styles = highlight()

    return (
        <SiteContainer>
            <SitePageHeader
                title="About Me"
                description="My story, skills, and what drives me forward"
            />

            <SitePageSection>
                <p>
                    I&apos;m Kyle, a 22 year old US-based software engineer from New Jersey. My coding journey began in <span>5th grade</span> when I was just <span>10 years old</span>, starting with <span>Minecraft</span> development which ignited my passion for software engineering.
                </p>

                <p>
                    <span>I&apos;m pursuing a Bachelor&apos;s degree in Computer Science at Rowan University</span> before focusing on a full-time position in the industry.
                </p>

                <Collapsible className='w-full'>
                    <CollapsibleTrigger className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline dark:text-blue-400 bg-transparent px-0 py-2">
                        <ChevronRight className="size-3 transition-all ease-out group-data-[panel-open]:rotate-90" />
                        <span className="group-data-[panel-open]:hidden">Read more about my backstory</span>
                        <span className="hidden group-data-[panel-open]:block">Hide backstory</span>
                    </CollapsibleTrigger>

                    <CollapsiblePanel>
                        <Card intent='ghost'>
                            <p>
                                From <span>age 10</span> until high school, I played soccer for my town&apos;s team <span>&quot;Surge&quot;</span>, experiencing various positions from forward to midfielder to defender.
                            </p>

                            <p>
                                At age 10, I got my first laptop and began exploring what it could do. By age 12, I was freelancing with <span>Minecraft</span> plugins, mods, and server infrastructure. I developed <span>&quot;Premium&quot;</span> plugins for a short period of time in 2021, while also working on custom projects under NDAs.
                            </p>

                        </Card>
                    </CollapsiblePanel>
                </Collapsible>

                <p>
                    My expertise includes distributed systems, API design, and cloud infrastructure, allowing me to build scalable solutions used by thousands. I run <Link href="https://previgil.com" className={cn(styles.blue(), 'hover:underline')}>Previgil</Link> for domain management, <Link href="https://bans.io" className={cn(styles.blue(), 'hover:underline')}>Bans.io</Link> for gaming communities, and <Link href="#" className={cn(styles.blue(), 'hover:underline')}>MailCurate</Link> for interactive emails.
                </p>

                <p>
                    Find me on Instagram for <Link href="https://instagram.com/kgm.digital" className={cn(styles.blue(), 'hover:underline')}>personal</Link> / <Link href="https://instagram.com/changearc" className={cn(styles.blue(), 'hover:underline')}>fitness</Link> updates.
                </p>
            </SitePageSection>
        </SiteContainer>
    )
}
