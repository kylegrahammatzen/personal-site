import { SiteContainer } from "@/components/site-container"
import { SitePageHeader } from "@/components/site-page-header"
import { SitePageSection } from "@/components/site-page-section"
import Link from "next/link"

export default function Home() {
  const titles: string[] = [
    "Software Engineer",
    "Entrepreneur",
    "Founder",
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
          As an entrepreneur, I've launched startups that solve real business challenges. Currently working on <Link href="https://previgil.com" className="underline text-blue-600 hover:text-blue-800">Previgil</Link> for domain management, <Link href="https://bans.io" className="underline text-blue-600 hover:text-blue-800">Bans.io</Link> for gaming communities, and <Link href="#" className="underline text-blue-600 hover:text-blue-800">MailCurate</Link> for interactive emails. <Link href="/about" className="underline text-blue-600 hover:text-blue-800">Learn more about me</Link>.
        </p>
      </SitePageSection>
    </SiteContainer>
  )
}