import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SitePageSection } from "@/components/site-page-section";

export type ProjectItemProps = {
    icon: string;
    title: string;
    description: string;
    url?: string;
};

export type SiteProjectsSectionProps = {
    projects: ProjectItemProps[];
};

export const SiteProjectsSection = (props: SiteProjectsSectionProps) => {
    return (
        <SitePageSection>
            <h2 className="text-md font-medium mb-4">Projects</h2>
            <Card>
                <div className="flex flex-col -mx-4">
                    {props.projects.map((project, index) => {
                        const isFirstItem = index === 0;
                        const isLastItem = index === props.projects.length - 1;

                        const itemClasses = [
                            !isLastItem && "border-b border-gray-300 dark:border-[#333333]",
                            isFirstItem ? "pt-0 pb-4" : isLastItem ? "pt-4 pb-0" : "py-4",
                            "px-4"
                        ].filter(Boolean).join(" ");

                        return (
                            <div key={index} className={itemClasses}>
                                {project.url ? (
                                    <Link href={project.url} target="_blank" rel="noopener noreferrer">
                                        <Button intent="ghost" className="h-full w-full p-0 group transition-colors">
                                            <div className="flex w-full items-center p-4">
                                                <div className="mr-4 flex-shrink-0 size-12 rounded-md bg-[#2a2a2a] flex items-center justify-center grayscale group-hover:grayscale-0 transition-all">
                                                    {project.icon}
                                                </div>
                                                <div className="flex flex-col text-left min-w-0 flex-1">
                                                    <h3 className="font-medium">{project.title}</h3>
                                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                                        {project.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </Button>
                                    </Link>
                                ) : (
                                    <Button intent="ghost" className="h-full w-full p-0 group transition-colors">
                                        <div className="flex w-full items-center p-4">
                                            <div className="mr-4 flex-shrink-0 size-12 rounded-md bg-[#2a2a2a] flex items-center justify-center grayscale group-hover:grayscale-0 transition-all">
                                                {project.icon}
                                            </div>
                                            <div className="flex flex-col text-left min-w-0 flex-1">
                                                <h3 className="font-medium">{project.title}</h3>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                                    {project.description}
                                                </p>
                                            </div>
                                        </div>
                                    </Button>
                                )}
                            </div>
                        );
                    })}
                </div>
            </Card>
        </SitePageSection>
    );
};