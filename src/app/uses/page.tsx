import { SiteContainer } from "@/components/site-container";
import { SitePageHeader } from "@/components/site-page-header";
import { SitePageSection } from "@/components/site-page-section";

export default function UsesPage() {
    return (
        <SiteContainer>
            <SitePageHeader
                title="Uses"
                description="Software, hardware and tools that I use everyday"
            />

            <SitePageSection>
                <h2 className="text-xl font-semibold">Development Tools</h2>
                <p>Content about your development tools...</p>

                <h2 className="text-xl font-semibold mt-6">Hardware</h2>
                <p>Content about your hardware setup...</p>
            </SitePageSection>
        </SiteContainer>
    )
}