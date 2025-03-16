"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Tab, TabList, TabPanel, Tabs } from "@/components/ui/tab";
import Image from "next/image";
import { useMount } from "@/hooks/use-mount";

type RouteMap = Record<string, string>;

const routes: RouteMap = {
  "/": "home",
  "/about": "about",
  "/uses": "uses",
};

export const SiteHeader = () => {
  const pathname = usePathname();

  const getActiveTab = (path: string) => {
    if (routes[path]) return routes[path];
    if (path.startsWith("/blog/")) return "blog";
    return "default";
  };

  const [activeTab, setActiveTab] = useState(getActiveTab(pathname));

  useEffect(() => {
    setActiveTab(getActiveTab(pathname));
  }, [pathname]);

  const isMounted = useMount();

  if (!isMounted) return null;

  return (
    <header className="mb-16 flex items-center justify-between">
      <Link href="/" onClick={() => setActiveTab("home")}>
        <div className="relative w-16 h-10">
          <Image
            src="/signature.webp"
            alt="Kyle's signature"
            width={64}
            height={40}
            priority
            className="object-contain dark:invert"
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
            <Tab value="blog" disabled>Blog</Tab>
            <Link href="/uses">
              <Tab value="uses">Uses</Tab>
            </Link>
          </TabList>

          <div className="sr-only">
            <TabPanel value="home" />
            <TabPanel value="about" />
            <TabPanel value="blog" />
            <TabPanel value="uses" />
          </div>
        </Tabs>
      </div>
    </header>
  );
};
