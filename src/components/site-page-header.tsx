import { Carousel } from "@/components/carousel"
import type { ReactNode } from "react"

type SitePageHeaderProps = {
    title: string | string[]
    description?: string | ReactNode
}

export const SitePageHeader = (props: SitePageHeaderProps) => {
    const isCarousel = Array.isArray(props.title)

    return (
        <div className="space-y-2">
            <h1 className="text-3xl">
                {isCarousel ? <Carousel items={props.title as string[]} /> : props.title}
            </h1>
            {props.description && <div>{props.description}</div>}
        </div>
    )
}