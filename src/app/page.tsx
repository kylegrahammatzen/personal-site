import { tv } from 'tailwind-variants'
import Link from "next/link"
import { SiteContainer } from "@/components/site-container"
import { SiteItems } from "@/components/site-items"
import { SitePageHeader } from "@/components/site-page-header"
import { SitePageSection } from "@/components/site-page-section"
import { createItem } from "@/lib/item-creators"
import { Github, Linkedin, Mail } from "lucide-react"

const link = tv({
  slots: {
    base: "font-medium hover:underline",
    primary: "text-blue-600 dark:text-blue-400",
  }
})

export default function Home() {
  const titles = [
    "Software Engineer",
    "Entrepreneur",
    "Founder",
  ]

  const projectItems = [
    createItem({
      link: "#",
      name: "BetterClerk",
      icon: { type: 'acronym', text: 'BC' },
      description: "Next.js 15 auth with SingleStore, multi-tenancy, MFA & sessions",
      isExternal: false
    }),
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
        description={
          <p className="font-bold">
            I'm Kyle, a US-based engineer from New Jersey. Currently pursuing my Computer Science
            degree at Rowan University while building software for clients worldwide.
          </p>
        }
      />

      <SitePageSection>
        <p className="mb-4 text-base leading-relaxed">
          I build scalable software systems that power applications used by thousands. My expertise includes distributed systems, API design, and cloud infrastructure.
        </p>

        <p className="text-base leading-relaxed">
          As an entrepreneur, I've launched startups that solve real business challenges. Currently working on{' '}
          <Link href="https://previgil.com" className={link().base()} rel="preconnect">
            <span className={link().primary()}>Previgil</span>
          </Link> for domain management,{' '}
          <Link href="https://bans.io" className={link().base()} rel="preconnect">
            <span className={link().primary()}>Bans.io</span>
          </Link> for gaming communities, and{' '}
          <Link href="#" className={link().base()}>
            <span className={link().primary()}>MailCurate</span>
          </Link> for interactive emails.{' '}
          <Link href="/about" className={link().base()}>
            <span className={link().primary()}>Learn more about me</span>
          </Link>.
        </p>
      </SitePageSection>

      <SiteItems sectionTitle="Projects" items={projectItems} />

      <SiteItems sectionTitle="Connect" items={connectItems} />
    </SiteContainer>
  )
}