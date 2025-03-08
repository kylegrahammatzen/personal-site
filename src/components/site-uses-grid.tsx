import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export type UsesItemProps = {
  link: string;
  image: string;
  name: string;
  description: string;
};

export type UsesGridProps = {
  items: UsesItemProps[];
};

const UsesItem = (props: UsesItemProps) => {
  return (
    <Link href={props.link}>
      <Button intent="ghost" className="group w-full">
        <div className="flex flex-col w-full">
          <div className="flex justify-center mb-2">
            <div className="relative size-20">
              <Image
                src={props.image}
                alt={props.name}
                fill
                className="opacity-80 grayscale object-contain transition-all group-hover:grayscale-0"
              />
            </div>
          </div>
          <div className="text-left w-full">
            <h3 className="text-sm sm:text-base font-medium truncate">
              {props.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {props.description}
            </p>
          </div>
        </div>
      </Button>
    </Link>
  );
};

export const SiteUsesGrid = (props: UsesGridProps) => {
  return (
    <Card>
      <div className="-m-4 grid grid-cols-2">
        {props.items.map((item, index) => {
          const row = Math.floor(index / 2);
          const isLastRow = row === Math.ceil(props.items.length / 2) - 1;
          const isLeftColumn = index % 2 === 0;

          const borderClasses = `
            py-3 
            ${isLeftColumn ? 'pr-3 pl-3 border-r' : 'pl-3 pr-3'} 
            ${!isLastRow ? 'border-b' : ''} 
            border-gray-300 dark:border-[#3a3a3a]
          `.trim();

          return (
            <div key={index} className={borderClasses}>
              <UsesItem
                link={item.link}
                image={item.image}
                name={item.name}
                description={item.description}
              />
            </div>
          );
        })}
      </div>
    </Card>
  );
};