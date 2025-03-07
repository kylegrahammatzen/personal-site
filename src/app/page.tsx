import { SiteConnectSection } from "@/components/site-connect-section"
import { SiteContainer } from "@/components/site-container"
import { SitePageHeader } from "@/components/site-page-header"
import { SitePageSection } from "@/components/site-page-section"
import { ProjectItemProps, SiteProjectsSection, SiteProjectsSectionProps } from "@/components/site-projects-section"
import { Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const titles: string[] = [
    "Software Engineer",
    "Entrepreneur",
    "Founder",
  ]

  const projects: ProjectItemProps[] = [
    {
      icon: "🎨",
      title: "UI",
      description: "Private UI library built on Base UI for personal projects",
      url: "https://github.com/kylegrahammatzen/ui",
    },
    {
      icon: "🚀",
      title: "BetterAuth Boilerplate",
      description: "Next.js starter with Drizzle ORM and organization management",
      url: "https://github.com/kylegrahammatzen/betterauth-boilerplate",
    },
    {
      icon: "🔐",
      title: "Authbase",
      description: "Next.js 14 auth system with access/refresh tokens",
      url: "https://github.com/kylegrahammatzen/authbase",
    },
  ];


  const socialLinks = [
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/kylegrahammatzen/",
      icon: <Linkedin size={18} className="text-gray-600 dark:text-gray-300" />
    },
    {
      platform: "GitHub",
      url: "https://github.com/kylegrahammatzen",
      icon: <Github size={18} className="text-gray-600 dark:text-gray-300" />
    }
  ]

  return (
    <SiteContainer>
      <SitePageHeader
        title={titles}
        description={
          <p className="font-medium">
            I'm Kyle, a US-based engineer from West Deptford, New Jersey. Currently pursuing my Computer Science
            degree at Rowan University while building software for clients worldwide.
          </p>
        }
      />

      <SitePageSection>
        <p>
          I build scalable software systems that power applications used by thousands. My expertise includes distributed systems, API design, and cloud infrastructure.
        </p>

        <p>
          As an entrepreneur, I've launched startups that solve real business challenges. Currently working on <Link href="https://previgil.com" className="font-medium text-blue-600 hover:underline dark:text-blue-400">Previgil</Link> for domain management, <Link href="https://bans.io" className="font-medium text-blue-600 hover:underline dark:text-blue-400">Bans.io</Link> for gaming communities, and <Link href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-400">MailCurate</Link> for interactive emails. <Link href="/about" className="font-medium text-blue-600 hover:underline dark:text-blue-400">Learn more about me</Link>.
        </p>
      </SitePageSection>

      <SiteProjectsSection projects={projects} />

      <SiteConnectSection socialLinks={socialLinks} email={{
        address: "hello@kylegm.com",
        label: "Email me"
      }} />
    </SiteContainer>
  )
}