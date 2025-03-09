import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

export type ItemIconType =
    | { type: 'icon'; icon: LucideIcon }
    | { type: 'acronym'; text: string };

export type ItemData = {
    link: string;
    name: string;
    description?: string;
    email?: string;
    icon: ItemIconType;
    isExternal?: boolean;
};

export type SiteItemType = {
    link: string;
    isExternal: boolean;
    content: ReactNode;
};

export const createItem = (item: ItemData): SiteItemType => {
    return {
        link: item.link,
        isExternal: item.isExternal ?? true,
        content: (
            <div className="flex w-full items-center">
                <div className="mr-2 size-8 min-w-8 min-h-8 rounded-md bg-[#6a6a6a] dark:bg-[#2a2a2a] text-white flex items-center justify-center">
                    {item.icon.type === 'icon' ? (
                        <item.icon.icon size={18} />
                    ) : (
                        <span className="text-white font-medium">{item.icon.text}</span>
                    )}
                </div>

                {item.email ? (
                    <div className="flex justify-between items-center w-full">
                        <h3 className="font-medium">{item.name}</h3>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{item.email}</span>
                    </div>
                ) : (
                    <div className="flex flex-col text-left">
                        <h3 className="font-medium">{item.name}</h3>
                        {item.description && (
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                {item.description}
                            </p>
                        )}
                    </div>
                )}
            </div>
        )
    };
};

export type SoftwareItemData = {
    link: string;
    name: string;
    image: string;
    description: string;
    fallback?: string;
    isExternal?: boolean;
};

export const createSoftwareItem = (item: SoftwareItemData) => {
    return {
        link: item.link,
        isExternal: item.isExternal ?? true,
        content: (
            <div className="group flex w-full items-center">
                <Avatar className="mr-2 grayscale transform-gpu transition-filter duration-300 ease-in-out group-hover:grayscale-0">
                    <AvatarImage src={item.image} alt={item.name} />
                    <AvatarFallback>{item.fallback ?? item.name}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col text-left">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        {item.description}
                    </p>
                </div>
            </div>
        )
    };
};