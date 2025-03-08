import type { ReactNode } from "react"

type SitePageSectionProps = {
    children: ReactNode
    className?: string
}

export const SitePageSection = (props: SitePageSectionProps) => {
    return <div className={`space-y-4 ${props.className ?? ""}`}>{props.children}</div>
}