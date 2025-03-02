import { SiteContainer } from "@/components/site-container"
import { SitePageHeader } from "@/components/site-page-header"
import { SitePageSection } from "@/components/site-page-section"

export default function AboutPage() {
    return (
        <SiteContainer>
            <SitePageHeader
                title="About Me"
                description="A bit more about me and my background"
            />

            <SitePageSection>
                <p>Extended content about your background, interests, etc...</p>
            </SitePageSection>
        </SiteContainer>
    )
}