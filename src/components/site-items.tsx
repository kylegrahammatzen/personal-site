import type { ReactNode } from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { SitePageSection } from '@/components/site-page-section'

export type SiteItemProps = {
    link: string;
    content: ReactNode;
};

export type SiteItemsProps = {
    items: SiteItemProps[];
    sectionTitle: string;
    className?: string;
};

export const SiteItems = (props: SiteItemsProps) => {
    const content = (
        <Card>
            <div className="flex flex-col -mx-4">
                {props.items.map((item, index) => {
                    const isFirstItem = index === 0;
                    const isLastItem = index === props.items.length - 1;

                    const itemClasses = [
                        !isLastItem && "border-b border-gray-300 dark:border-[#333333]",
                        isFirstItem ? "pt-0 pb-4" : isLastItem ? "pt-4 pb-0" : "py-4",
                        "px-4"
                    ].filter(Boolean).join(" ");

                    return (
                        <div key={index} className={itemClasses}>
                            <Link href={item.link} target="_blank" rel="noopener noreferrer">
                                <Button intent="ghost" className="w-full">
                                    {item.content}
                                </Button>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </Card>
    );

    return (
        <SitePageSection className={props.className}>
            <h2 className="text-md font-medium mb-4">{props.sectionTitle}</h2>
            {content}
        </SitePageSection>
    );
};