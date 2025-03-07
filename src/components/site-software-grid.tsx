import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export type SoftwareItemProps = {
    link: string;
    image: string;
    name: string;
    description: string;
};

export type SiteSoftwareGridProps = {
    items: SoftwareItemProps[];
};

export const SiteSoftwareGrid = (props: SiteSoftwareGridProps) => {
    return (
        <Card>
            <div className="flex flex-col -mx-4">
                {props.items.map((item, index) => {
                    const isFirstItem = index === 0;
                    const isLastItem = index === props.items.length - 1;

                    const itemClasses = [
                        !isLastItem && "border-b border-gray-300 dark:border-[#3a3a3a]",
                        isFirstItem ? "pt-0 pb-4" : isLastItem ? "pt-4 pb-0" : "py-4",
                        "px-4"
                    ].filter(Boolean).join(" ");

                    return (
                        <div key={index} className={itemClasses}>
                            <Link href={item.link}>
                                <Button intent="ghost" className="w-full">
                                    <div className="flex w-full items-center">
                                        <div className="mr-3 flex-shrink-0">
                                            <Avatar>
                                                <AvatarImage src={item.image} alt={item.name} />
                                                <AvatarFallback>{item.name.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                        </div>
                                        <div className="flex flex-col text-left min-w-0 flex-1">
                                            <h3 className="font-medium">{item.name}</h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                                        </div>
                                    </div>
                                </Button>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </Card>
    );
};