import { SiteContainer } from "@/components/site-container";
import { SitePageHeader } from "@/components/site-page-header";
import { SitePageSection } from "@/components/site-page-section";

export default function BlogPage() {
    return (
        <SiteContainer>
            <SitePageHeader
                title="Blog"
                description="My thoughts on software development"
            />

            <SitePageSection>
                You found the secret <code>/blog</code> easter egg 🐣 Come back later to see what I write.
            </SitePageSection>
        </SiteContainer>
    )
}