import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SiteContainer } from "@/components/site-container"
import { SitePageHeader } from "@/components/site-page-header"
import { SitePageSection } from "@/components/site-page-section"

export default function NotFound() {
    return (
        <SiteContainer>
            <SitePageHeader
                title="Page Not Found"
                description={
                    <p className="font-medium">
                        Sorry, this page doesn't exist.
                    </p>
                }
            />

            <SitePageSection>
                <p className="mb-4 text-base leading-relaxed">
                    You can use the navigation above or return to my homepage.
                </p>

                <div className="mt-8">
                    <Link href="/" passHref>
                        <Button>
                            Return home
                        </Button>
                    </Link>
                </div>
            </SitePageSection>
        </SiteContainer>
    )
}