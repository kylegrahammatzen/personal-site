import { SiteContainer } from "@/components/site-container";
import { SitePageHeader } from "@/components/site-page-header";
import { SitePageSection } from "@/components/site-page-section";

export default function Blogs() {
    return (
        <SiteContainer>
            <SitePageHeader
                title="Blog"
                description="My thoughts on software development"
            />

            <SitePageSection>
                <h1>blog list here</h1>
            </SitePageSection>
        </SiteContainer>
    )
}