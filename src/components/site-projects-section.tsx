'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { SitePageSection } from '@/components/site-page-section'

export type SiteProjectCardProps = {
    icon: string
    title: string
    description: string
    url?: string
    date: string
}

export type SiteProjectsSectionProps = {
    projects: SiteProjectCardProps[]
}

export function SiteProjectsSection(props: SiteProjectsSectionProps) {
    const [searchQuery, setSearchQuery] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const projectsPerPage = 3

    const getTimestamp = (dateString: string): number => {
        return new Date(dateString).getTime();
    }

    function ProjectCard(props: SiteProjectCardProps) {
        const content = (
            <div className="flex flex-col gap-2">
                <div className="flex items-start gap-4">
                    <div className="size-12 rounded-md bg-gray-100 dark:bg-[#2a2a2a] border border-gray-200 dark:border-[#3a3a3a] flex items-center justify-center">
                        {props.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                        <h3 className="font-medium text-base">{props.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 break-words">
                            {props.description}
                        </p>
                    </div>
                </div>
                <div>
                    <Badge color="gray" size="sm">
                        {props.date}
                    </Badge>
                </div>
            </div>
        )

        if (props.url) {
            return (
                <Link href={props.url} className="block" target="_blank" rel="noopener noreferrer">
                    <Card intent="ghost">
                        {content}
                    </Card>
                </Link>
            )
        }

        return (
            <Card intent="ghost">
                {content}
            </Card>
        )
    }

    const filteredProjects = props.projects
        .filter(project => {
            return project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.date.toLowerCase().includes(searchQuery.toLowerCase());
        })
        .sort((a, b) => {
            return getTimestamp(b.date) - getTimestamp(a.date);
        });

    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage)
    const indexOfLastProject = currentPage * projectsPerPage
    const indexOfFirstProject = indexOfLastProject - projectsPerPage
    const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject)

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(page => page + 1)
        }
    }

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(page => page - 1)
        }
    }

    const handleSearch = (value: string) => {
        setSearchQuery(value)
        setCurrentPage(1)
    }

    return (
        <SitePageSection className="mb-16">
            <h2 className="text-lg font-medium">Projects</h2>

            <Input
                type="text"
                placeholder="Search projects by title, description, or date..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full"
            />

            {filteredProjects.length === 0 ? (
                <p className="text-sm text-gray-600 dark:text-gray-300">
                    No projects found matching your search.
                </p>
            ) : (
                <div className="space-y-4">
                    {currentProjects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            icon={project.icon}
                            title={project.title}
                            description={project.description}
                            url={project.url}
                            date={project.date}
                        />
                    ))}
                </div>
            )}

            <div className="flex items-center justify-between mt-6">
                <div className="text-sm text-gray-600 dark:text-gray-300">
                    Showing {filteredProjects.length === 0 ? "0" : `${indexOfFirstProject + 1}-${Math.min(indexOfLastProject, filteredProjects.length)}`} of {filteredProjects.length}
                </div>
                <div className="flex gap-2">
                    <Button
                        onClick={goToPreviousPage}
                        disabled={currentPage === 1 || filteredProjects.length === 0}
                        intent="ghost"
                        size="sm"
                    >
                        Previous
                    </Button>
                    <Button
                        onClick={goToNextPage}
                        disabled={currentPage === totalPages || filteredProjects.length === 0 || totalPages === 0}
                        intent="ghost"
                        size="sm"
                    >
                        Next
                    </Button>
                </div>
            </div>
        </SitePageSection>
    )
}