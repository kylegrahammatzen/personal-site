"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Tab, TabList, TabPanel, Tabs } from "@/components/ui/tab";
import Image from "next/image";

type RouteMap = Record<string, string>;

const routes: RouteMap = {
  "/": "home",
  "/about": "about",
  "/uses": "uses",
  "/blog": "blog",
};

export const SiteHeader = () => {
  const pathname = usePathname();

  const getActiveTab = (path: string) => {
    return routes[path] ?? "home";
  };

  const [activeTab, setActiveTab] = useState(getActiveTab(pathname));

  // Update active tab when pathname changes
  useEffect(() => {
    setActiveTab(getActiveTab(pathname));
  }, [pathname]);

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
            className={`object-contain dark:invert`}
          />
        </div>
      </Link>
      <div className="flex items-center gap-1">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabList intent="card">
            <Link href="/">
              <Tab value="home" aria-current={activeTab === 'home' ? 'page' : undefined}>Home</Tab>
            </Link>
            <Link href="/about">
              <Tab value="about" aria-current={activeTab === 'about' ? 'page' : undefined}>About</Tab>
            </Link>
            <Tab value="blog" disabled>
              Blog
            </Tab>
            <Link href="/uses">
              <Tab value="uses" aria-current={activeTab === 'uses' ? 'page' : undefined}>Uses</Tab>
            </Link>
          </TabList>
          {/* Hidden TabPanels for accessibility compliance */}
          <div className="sr-only">
            <TabPanel value="home">Home page content</TabPanel>
            <TabPanel value="about">About page content</TabPanel>
            <TabPanel value="blog">Blog content</TabPanel>
            <TabPanel value="uses">Uses page content</TabPanel>
          </div>
        </Tabs>
      </div>
    </header>
  );
};