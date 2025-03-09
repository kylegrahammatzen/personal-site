
import { SiteContainer } from "@/components/site-container"
import { SiteItems } from "@/components/site-items"
import { SitePageHeader } from "@/components/site-page-header"
import { SitePageSection } from "@/components/site-page-section"
import { createItem } from "@/lib/item-creators"
import { Github, Linkedin, LucideIcon, Mail } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const titles: string[] = [
    "Software Engineer",
    "Entrepreneur",
    "Founder",
  ]

  const projectItems = [
    createItem({
      link: "#",
      name: "UI",
      icon: { type: 'acronym', text: 'U' },
      description: "Private UI library for personal projects",
      isExternal: false
    }),
    createItem({
      link: "https://github.com/kylegrahammatzen/betterauth-boilerplate",
      name: "BetterAuth Boilerplate",
      icon: { type: 'acronym', text: 'BB' },
      description: "Next.js starter with Drizzle ORM"
    }),
    createItem({
      link: "https://github.com/kylegrahammatzen/authbase",
      name: "Authbase",
      icon: { type: 'acronym', text: 'A' },
      description: "Next.js 14 auth system with access/refresh tokens"
    })
  ];

  const connectItems = [
    createItem({
      link: "https://www.linkedin.com/in/kylegrahammatzen/",
      name: "LinkedIn",
      icon: { type: 'icon', icon: Linkedin }
    }),
    createItem({
      link: "https://github.com/kylegrahammatzen",
      name: "GitHub",
      icon: { type: 'icon', icon: Github }
    }),
    createItem({
      link: "mailto:hello@kylegm.com",
      name: "Email",
      icon: { type: 'icon', icon: Mail },
      email: "hello@kylegm.com"
    })
  ];

  return (
    <SiteContainer>
      <SitePageHeader
        title={titles}
        description={<p className="font-bold">
          I'm Kyle, a US-based engineer from New Jersey. Currently pursuing my Computer Science
          degree at Rowan University while building software for clients worldwide.
        </p>}
      />

      <SitePageSection>
        <p>
          I build scalable software systems that power applications used by thousands. My expertise includes distributed systems, API design, and cloud infrastructure.
        </p>

        <p>
          As an entrepreneur, I've launched startups that solve real business challenges. Currently working on <Link href="https://previgil.com" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">Previgil</Link> for domain management, <Link href="https://bans.io" className="font-medium text-blue-600 hover:underline dark:text-blue-400">Bans.io</Link> for gaming communities, and <Link href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-400">MailCurate</Link> for interactive emails. <Link href="/about" className="font-medium text-blue-600 hover:underline dark:text-blue-400">Learn more about me</Link>.
        </p>
      </SitePageSection>

      <SiteItems sectionTitle="Projects" items={projectItems} />

      <SiteItems sectionTitle="Connect" items={connectItems} />
    </SiteContainer>
  )
}