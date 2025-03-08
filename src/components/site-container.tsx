import type { ReactNode } from "react"

type SiteContainerProps = {
    children: ReactNode
}

export const SiteContainer = (props: SiteContainerProps) => {
    return <div className="space-y-8">{props.children}</div>
}