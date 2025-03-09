import dynamic from 'next/dynamic'
import type { ReactNode } from "react"

const Carousel = dynamic(() => import("@/components/carousel").then(mod => mod.Carousel), {
    loading: () => <span className="text-3xl">Loading...</span>
})

type SitePageHeaderProps = {
    title: string | string[]
    description?: string | ReactNode
}

export const SitePageHeader = (props: SitePageHeaderProps) => {
    const isCarousel = Array.isArray(props.title)

    if (!isCarousel) {
        return (
            <div className="space-y-2">
                <h1 className="text-3xl">{props.title}</h1>
                {props.description && <div>{props.description}</div>}
            </div>
        )
    }

    return (
        <div className="space-y-2">
            <h1 className="text-3xl">
                <Carousel items={props.title as string[]} />
            </h1>
            {props.description && <div>{props.description}</div>}
        </div>
    )
}