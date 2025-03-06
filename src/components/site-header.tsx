"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SiteLogo } from "@/components/site-logo";
import { Tab, TabList, Tabs } from "@/components/ui/tab";

type RouteMap = {
  [path: string]: string;
};

export const SiteHeader = () => {
  const pathname = usePathname();

  const routes: RouteMap = {
    "/": "home",
    "/about": "about",
    "/uses": "uses",
    "/blog": "blog",
  };

  const getActiveTab = (path: string) => {
    return routes[path] || "home";
  };

  const [activeTab, setActiveTab] = useState(getActiveTab(pathname));

  return (
    <header className="mb-16 flex items-center justify-between">
      <Link href="/">
        <SiteLogo />
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
            <Link href="/blog">
              <Tab value="blog" disabled>
                Blog
              </Tab>
            </Link>
            <Link href="/uses">
              <Tab value="uses">Uses</Tab>
            </Link>
          </TabList>
        </Tabs>
      </div>
    </header>
  );
};
