import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { MitsubishiIcon } from "@/components/icons/MitsubishiIcon";
import { TacoBellIcon } from "@/components/icons/TacoBellIcon";
import { PortfolioItem } from "@/components/PortfolioItem";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export type SkillType = Record<string, string[]>;

export default async function Page() {
  const skills: SkillType = {
    "Tech Stack": ["Next.js", "React.js", "Tailwind CSS", "shadcn/ui"],
    "Programming Languages": [
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "Go",
      "C++",
      "PHP",
      "HTML",
      "CSS",
      "Visual Basic .NET",
    ],
    Databases: [
      "PostgresSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "SQLite",
      "SingleStore",
    ],
    Tools: ["Git", "Docker", "Maven", "Gradle", "JUnit", "Figma"],
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-12">
      <div className="flex space-x-4">
        <Avatar className="w-24 h-24">
          <AvatarImage src="pfp.png" alt="Profile picture" />
          <AvatarFallback className="w-24 h-24 text-2xl">KG</AvatarFallback>
        </Avatar>
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold">Kyle Graham Matzen</h1>
          <h2 className="text-3xl font-bold text-green-500">
            Software Engineer
          </h2>
          <p className="text-gray-600">
            I am a software and full-stack development student at Rowan
            University.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">About me</h2>
        <p className="text-gray-700">
          I&apos;m Kyle, a software engineer from the US with over ten years of
          programming experience and a year in web development.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              Icon: TacoBellIcon,
              company: "Taco Bell",
              role: "Crew",
              dates: "Aug. 2023 - Present",
            },
            {
              Icon: MitsubishiIcon,
              company: "Mitsubishi",
              role: "Parts Processor",
              dates: "Jun - Aug 2022",
            },
          ].map(({ Icon, company, role, dates }) => (
            <div key={company} className="flex items-center space-x-4">
              <div className="w-14 h-14 p-1 border border-gray-600 rounded-full flex items-center justify-center">
                <Icon className="w-8 h-8 text-black dark:text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{company}</h3>
                <p className="text-gray-600 hidden md:block">
                  {role}
                  <span className="text-gray-500"> • {dates}</span>
                </p>
                <p className="text-gray-600 md:hidden">
                  {role} • {dates.split(" (")[0]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Skills</h2>
        {Object.entries(skills).map(([category, skillsList]) => (
          <div key={category}>
            <h3 className="text-lg font-semibold">{category}</h3>
            <ul className="flex flex-wrap gap-2">
              {skillsList.map((skill, index) => (
                <li key={index}>
                  <div className="cursor-pointer inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2">
                    {skill}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              src: "/projects/playmc.png",
              name: "PlayMC",
              desc: "A community-driven giving a True Minecraft experience",
              link: "/project/playmc",
            },
            {
              src: "/projects/jobpiloting.png",
              name: "JobPiloting",
              desc: "Simplies the job application process",
              link: "/project/jobpiloting",
            },
            {
              src: "/projects/bans.png",
              name: "Bans.io",
              desc: "Multi-platform game moderation",
              link: "/project/bans",
            },
          ].map(({ src, name, desc, link }) => (
            <PortfolioItem
              key={name}
              imageSrc={src}
              projectName={name}
              projectDescription={desc}
              projectLink={link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
