import { SiteContainer } from "@/components/site-container";
import { SiteItems } from "@/components/site-items";
import { SitePageHeader } from "@/components/site-page-header";
import { SitePageSection } from "@/components/site-page-section";
import { SiteUsesGrid } from "@/components/site-uses-grid";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function UsesPage() {
  const softwareItems = [
    {
      link: "https://www.figma.com/",
      content: (
        <div className="group flex w-full items-center">
          <Avatar className="mr-3 grayscale group-hover:grayscale-0 transition-all">
            <AvatarImage src="/figma.png" alt="Figma" />
            <AvatarFallback>F</AvatarFallback>
          </Avatar>
          <div className="flex flex-col text-left">
            <h3 className="font-medium">Figma</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              For all design work and prototyping.
            </p>
          </div>
        </div>
      )
    },
    {
      link: "https://cursor.com/",
      content: (
        <div className="group flex w-full items-center">
          <Avatar className="mr-3 grayscale group-hover:grayscale-0 transition-all">
            <AvatarImage src="/cursor.png" alt="Cursor" />
            <AvatarFallback>C</AvatarFallback>
          </Avatar>
          <div className="flex flex-col text-left">
            <h3 className="font-medium">Cursor</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              AI-powered code editor for improved productivity.
            </p>
          </div>
        </div>
      )
    },
    {
      link: "https://discord.com/",
      content: (
        <div className="group flex w-full items-center">
          <Avatar className="mr-3 grayscale group-hover:grayscale-0 transition-all">
            <AvatarImage src="/discord.png" alt="Discord" />
            <AvatarFallback>D</AvatarFallback>
          </Avatar>
          <div className="flex flex-col text-left">
            <h3 className="font-medium">Discord</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Communication platform for gaming and communities.
            </p>
          </div>
        </div>
      )
    },
    {
      link: "https://www.cloudflare.com/",
      content: (
        <div className="group flex w-full items-center">
          <Avatar className="mr-3 grayscale group-hover:grayscale-0 transition-all">
            <AvatarImage src="/cloudflare.png" alt="Cloudflare" />
            <AvatarFallback>C</AvatarFallback>
          </Avatar>
          <div className="flex flex-col text-left">
            <h3 className="font-medium">Cloudflare</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Domain registration & management.
            </p>
          </div>
        </div>
      )
    },
    {
      link: "https://previgil.com/",
      content: (
        <div className="group flex w-full items-center">
          <Avatar className="mr-3 grayscale group-hover:grayscale-0 transition-all">
            <AvatarImage src="/previgil.png" alt="Previgil" />
            <AvatarFallback>P</AvatarFallback>
          </Avatar>
          <div className="flex flex-col text-left">
            <h3 className="font-medium">Previgil</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Domain monitoring with real-time updates.
            </p>
          </div>
        </div>
      )
    },
    {
      link: "https://vercel.com/",
      content: (
        <div className="flex w-full items-center">
          <Avatar className="mr-3">
            <AvatarImage src="/vercel.png" alt="Vercel" />
            <AvatarFallback>V</AvatarFallback>
          </Avatar>
          <div className="flex flex-col text-left">
            <h3 className="font-medium">Vercel</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              For personal website & projects.
            </p>
          </div>
        </div>
      )
    },
    {
      link: "https://laravel.com/",
      content: (
        <div className="group flex w-full items-center">
          <Avatar className="mr-3 grayscale group-hover:grayscale-0 transition-all">
            <AvatarImage src="/laravel.png" alt="Laravel" />
            <AvatarFallback>L</AvatarFallback>
          </Avatar>
          <div className="flex flex-col text-left">
            <h3 className="font-medium">Laravel</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Framework for developing web applications.
            </p>
          </div>
        </div>
      )
    },
    {
      link: "https://www.hetzner.com/",
      content: (
        <div className="group flex w-full items-center">
          <Avatar className="mr-3 grayscale group-hover:grayscale-0 transition-all">
            <AvatarImage src="/hetzner.png" alt="Hetzner" />
            <AvatarFallback>H</AvatarFallback>
          </Avatar>
          <div className="flex flex-col text-left">
            <h3 className="font-medium">Hetzner</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Bare-metal machines and cloud servers.
            </p>
          </div>
        </div>
      )
    },
    {
      link: "https://www.google.com/chrome/",
      content: (
        <div className="group flex w-full items-center">
          <Avatar className="mr-3 grayscale group-hover:grayscale-0 transition-all">
            <AvatarImage src="/chrome.png" alt="Chrome" />
            <AvatarFallback>C</AvatarFallback>
          </Avatar>
          <div className="flex flex-col text-left">
            <h3 className="font-medium">Chrome</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Primary browser with dev tools and extensions.
            </p>
          </div>
        </div>
      )
    }
  ];

  const desktopItems = [
    {
      link: "https://www.amd.com/en/products/cpu/amd-ryzen-9-3950x",
      image: "/ryzen-3950x.png",
      name: "AMD Ryzen 9 3950X",
      description: "16-Core Processor",
    },
    {
      link: "https://noctua.at/en/nh-d15-chromax-black",
      image: "/noctua-nh-d15.png",
      name: "Noctua NH-D15",
      description: "CPU Cooler",
    },
    {
      link: "https://www.msi.com/Motherboard/MPG-X570-GAMING-EDGE-WIFI",
      image: "/msi-x570.png",
      name: "MSI MPG X570",
      description: "ATX AM4 Motherboard",
    },
    {
      link: "https://www.corsair.com/us/en/Categories/Products/Memory/vengeance-lpx-black",
      image: "/corsair-vengeance.png",
      name: "Corsair Vengeance LPX",
      description: "DDR4-3200 CL16 Memory (2 x 16 GB)",
    },
    {
      link: "https://www.teamgroupinc.com/en/product/mp34",
      image: "/teamgroup-mp34.png",
      name: "TEAMGROUP MP34 4 TB",
      description: "M.2 NVME Solid State Drive",
    },
    {
      link: "https://www.samsung.com/us/computing/memory-storage/solid-state-drives",
      image: "/samsung-970.png",
      name: "Samsung 970 Evo Plus 500 GB",
      description: "M.2 NVME Solid State Drive",
    },
    {
      link: "https://rog.asus.com/graphics-cards",
      image: "/asus-rtx2080ti.png",
      name: "Asus STRIX RTX 2080 Ti",
      description: "11 GB Graphics Card",
    },
    {
      link: "https://nzxt.com/product/h710",
      image: "/nzxt-h710.png",
      name: "NZXT H710",
      description: "ATX Mid Tower Case",
    },
    {
      link: "https://www.corsair.com/us/en/Categories/Products/Power-Supply-Units",
      image: "/corsair-sf750.png",
      name: "Corsair SF750",
      description: "750W 80+ Platinum Modular Power Supply",
    },
    {
      link: "https://www.tp-link.com/us/home-networking/pcie-adapter/tx401/",
      image: "/tp-link-wifi.png",
      name: "TP-Link WiFi 6 AX3000",
      description: "Up to 2400 Mbps, Bluetooth 5.2 PCIe Adapter",
    },
    {
      link: "https://www.microsoft.com/en-us/windows",
      image: "/windows10.png",
      name: "Windows 10 Home",
      description: "Operating System",
    },
    {
      link: "https://www.lg.com/us/monitors/ultragear-gaming-monitors",
      image: "/lg-ultragear-34.png",
      name: 'LG UltraGear 34GS95QE-B 34"',
      description: "3440 x 1440 240 Hz Monitor",
    },
    {
      link: "https://www.lg.com/us/monitors",
      image: "/lg-27gl850.png",
      name: 'LG 27GL850-B 27"',
      description: "2560 x 1440 144 Hz Monitor",
    },
    {
      link: "https://www.razer.com/gaming-mice/razer-deathadder-v3",
      image: "/razer-deathadder.png",
      name: "Razer DeathAdder V3",
      description: "Wired Optical Mouse",
    },
    {
      link: "https://www.logitechg.com/en-us/products/gaming-audio/pro-x-wireless-headset.html",
      image: "/logitech-pro-x.png",
      name: "Logitech PRO X 2 LIGHTSPEED",
      description: "Gaming Headset",
    },
    {
      link: "https://www.razer.com/gaming-keyboards/razer-huntsman-tournament-edition",
      image: "/razer-huntsman.png",
      name: "Razer Huntsman TE",
      description: "Optical Gaming Keyboard",
    },
  ];

  const gearItems = [
    {
      link: "https://www.apple.com/iphone/",
      image: "/iphone-12.png",
      name: "Apple iPhone 12",
      description: "64GB, Black",
    },
    {
      link: "https://www.apple.com/airpods-pro/",
      image: "/airpods-pro.png",
      name: "AirPods Pro",
      description: "2nd Generation",
    },
  ];

  return (
    <SiteContainer>
      <SitePageHeader
        title="Uses"
        description="The tools, equipment, and setup I rely on for my work and daily tasks."
      />

      <SiteItems sectionTitle="Software" items={softwareItems} />

      <SitePageSection>
        <h2 className="mb-4 text-xl font-semibold">Desktop Setup</h2>
        <SiteUsesGrid items={desktopItems} />
      </SitePageSection>

      <SitePageSection>
        <h2 className="mb-4 text-xl font-semibold">Everyday</h2>
        <SiteUsesGrid items={gearItems} />
      </SitePageSection>
    </SiteContainer>
  );
}