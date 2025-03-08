
import { SiteContainer } from "@/components/site-container"
import { SiteItems } from "@/components/site-items"
import { SitePageHeader } from "@/components/site-page-header"
import { SitePageSection } from "@/components/site-page-section"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const titles: string[] = [
    "Software Engineer",
    "Entrepreneur",
    "Founder",
  ]

  const projectItems = [
    {
      link: "https://github.com/kylegrahammatzen/ui",
      content: (
        <div className="flex w-full items-center">
          <div className="mr-2 size-8 rounded-md bg-[#6a6a6a] dark:bg-[#2a2a2a] flex items-center justify-center">
            <span className="text-white font-medium">U</span>
          </div>
          <div className="flex flex-col text-left">
            <h3 className="font-medium">UI</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Private UI library built on Base UI for personal projects
            </p>
          </div>
        </div>
      )
    },
    {
      link: "https://github.com/kylegrahammatzen/betterauth-boilerplate",
      content: (
        <div className="flex w-full items-center">
          <div className="mr-2 size-8 rounded-md bg-[#6a6a6a] dark:bg-[#2a2a2a] flex items-center justify-center">
            <span className="text-white font-medium">BB</span>
          </div>
          <div className="flex flex-col text-left">
            <h3 className="font-medium">BetterAuth Boilerplate</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Next.js starter with Drizzle ORM and organization management
            </p>
          </div>
        </div>
      )
    },
    {
      link: "https://github.com/kylegrahammatzen/authbase",
      content: (
        <div className="flex w-full items-center">
          <div className="mr-2 size-8 rounded-md bg-[#6a6a6a] dark:bg-[#2a2a2a] flex items-center justify-center">
            <span className="text-white font-medium">A</span>
          </div>
          <div className="flex flex-col text-left">
            <h3 className="font-medium">Authbase</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Next.js 14 auth system with access/refresh tokens
            </p>
          </div>
        </div>
      )
    }
  ];

  const connectItems = [
    {
      link: "https://www.linkedin.com/in/kylegrahammatzen/",
      content: (
        <div className="flex w-full items-center">
          <div className="mr-2 size-8 rounded-md bg-[#6a6a6a] dark:bg-[#2a2a2a] text-white flex items-center justify-center">
            <Linkedin size={18} />
          </div>
          <div className="flex flex-col text-left">
            <h3 className="font-medium">LinkedIn</h3>
          </div>
        </div>
      )
    },
    {
      link: "https://github.com/kylegrahammatzen",
      content: (
        <div className="flex w-full items-center">
          <div className="mr-2 size-8 rounded-md bg-[#6a6a6a] dark:bg-[#2a2a2a] text-white flex items-center justify-center">
            <Github size={18} />
          </div>
          <div className="flex flex-col text-left">
            <h3 className="font-medium">GitHub</h3>
          </div>
        </div>
      )
    },
    {
      link: "mailto:hello@kylegm.com",
      content: (
        <div className="flex w-full items-center">
          <div className="mr-2 size-8 w-9 rounded-md bg-[#6a6a6a] dark:bg-[#2a2a2a] text-white flex items-center justify-center">
            <Mail size={18} />
          </div>
          <div className="flex justify-between items-center w-full">
            <h3 className="font-medium">Email</h3>
            <span className="text-sm text-gray-600 dark:text-gray-400">hello@kylegm.com</span>
          </div>
        </div>
      )
    }
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