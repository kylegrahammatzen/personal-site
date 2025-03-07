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
      <Button intent="ghost" className="h-full w-full p-0">
        <div className="flex w-full flex-col p-4">
          <div className="mb-3 flex justify-center">
            <div className="relative size-24">
              <Image
                src={props.image}
                alt={props.name}
                fill
                className="object-contain opacity-80"
              />
            </div>
          </div>
          <div className="w-full text-left">
            <h3 className="truncate text-sm font-medium sm:text-base">
              {props.name}
            </h3>
            <p className="mt-1 hidden text-sm text-gray-600 dark:text-gray-400 sm:block">
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
          const col = index % 2;

          const rowCount = Math.ceil(props.items.length / 2);
          const isLastRow = row === rowCount - 1;

          const paddingClasses = [
            col === 0 && "pr-4 pl-4",
            col === 1 && "pl-4 pr-4",
            "py-4",
          ]
            .filter(Boolean)
            .join(" ");

          const borderClasses = [
            col === 0 && "border-r border-gray-300 dark:border-[#3a3a3a]",
            !isLastRow && "border-b border-gray-300 dark:border-[#3a3a3a]",
            paddingClasses,
          ]
            .filter(Boolean)
            .join(" ");

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
