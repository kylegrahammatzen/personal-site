"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Tab, TabList, Tabs } from "@/components/ui/tab";
import Image from "next/image";

type RouteMap = {
  [path: string]: string;
};

const routes: RouteMap = {
  "/": "home",
  "/about": "about",
  "/uses": "uses",
  "/blog": "blog",
};

export const SiteHeader = () => {
  const pathname = usePathname();

  const getActiveTab = (path: string) => {
    return routes[path] || "home";
  };

  const [activeTab, setActiveTab] = useState(getActiveTab(pathname));

  return (
    <header className="mb-16 flex items-center justify-between">
      <Link href="/">
        <div className="relative w-16 h-10">
          <Image
            src="/signature.png"
            alt="Kyle's signature"
            width={64}
            height={40}
            className={`object-contain dark:invert`}
          />
        </div>
      </Link>
      <div className="flex items-center gap-1">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabList intent="card">
            <Link href="/">
              <Tab value="home">Home</Tab>
            </Link>
            <Link href="/about">
              <Tab value="about">About</Tab>
            </Link>
            <Tab value="blog" disabled>
              Blog
            </Tab>
            <Link href="/uses">
              <Tab value="uses">Uses</Tab>
            </Link>
          </TabList>
        </Tabs>
      </div>
    </header>
  );
};
