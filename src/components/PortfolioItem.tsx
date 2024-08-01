import Image from "next/image";

type PortfolioItemProps = {
  imageSrc: string;
  projectName: string;
  projectDescription: string;
  projectLink: string;
};

const PortfolioItem = (props: PortfolioItemProps) => {
  return (
    <div className="flex items-center p-4 border rounded-xl shadow bg-card text-card-foreground space-x-4 h-16 hover:bg-card-hover hover:shadow-lg transition duration-300 ease-in-out">
      <Image
        src={props.imageSrc}
        alt={`${props.projectName} logo`}
        width={32}
        height={32}
      />
      <div className="flex-1 flex flex-col items-start justify-center">
        <h3 className="font-semibold leading-none tracking-tight">
          {props.projectName}
        </h3>
        <p className="text-sm text-muted-foreground">
          {props.projectDescription}
        </p>
      </div>
    </div>
  );
};

export { PortfolioItem };
