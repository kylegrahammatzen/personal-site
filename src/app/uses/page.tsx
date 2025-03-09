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
          <Avatar className="mr-2 grayscale group-hover:grayscale-0 transition-all">
            <AvatarImage src="/figma.webp" alt="Figma" />
            <AvatarFallback>Figma</AvatarFallback>
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
          <Avatar className="mr-2 grayscale group-hover:grayscale-0 transition-all">
            <AvatarImage src="/cursor.webp" alt="Cursor" />
            <AvatarFallback>Cursor</AvatarFallback>
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
          <Avatar className="mr-2 grayscale group-hover:grayscale-0 transition-all">
            <AvatarImage src="/discord.webp" alt="Discord" />
            <AvatarFallback>Discord</AvatarFallback>
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
          <Avatar className="mr-2 grayscale group-hover:grayscale-0 transition-all">
            <AvatarImage src="/cloudflare.webp" alt="Cloudflare" />
            <AvatarFallback>Cloudflare</AvatarFallback>
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
          <Avatar className="mr-2 grayscale group-hover:grayscale-0 transition-all">
            <AvatarImage src="/previgil.webp" alt="Previgil" />
            <AvatarFallback>Previgil</AvatarFallback>
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
          <Avatar className="mr-2">
            <AvatarImage src="/vercel.webp" alt="Vercel" />
            <AvatarFallback>Vercel</AvatarFallback>
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
          <Avatar className="mr-2 grayscale group-hover:grayscale-0 transition-all">
            <AvatarImage src="/laravel.webp" alt="Laravel" />
            <AvatarFallback>Laravel</AvatarFallback>
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
          <Avatar className="mr-2 grayscale group-hover:grayscale-0 transition-all">
            <AvatarImage src="/hetzner.webp" alt="Hetzner" />
            <AvatarFallback>Hetzner</AvatarFallback>
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
          <Avatar className="mr-2 grayscale group-hover:grayscale-0 transition-all">
            <AvatarImage src="/chrome.webp" alt="Chrome" />
            <AvatarFallback>Chrome</AvatarFallback>
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
      link: "https://amzn.to/3DqagOO",
      image: "/ryzen-3950x.webp",
      name: "AMD Ryzen 9 3950X",
      description: "16C 32T, 3.5GHz (4.7GHz Boost)",
    },
    {
      link: "https://amzn.to/4kykyNy",
      image: "/noctua-nh-d15.webp",
      name: "Noctua NH-D15 chromax.black",
      description: "CPU Cooler",
    },
    {
      link: "https://amzn.to/4kykNIs",
      image: "/msi-x570.webp",
      name: "MSI MPG X570",
      description: "ATX AM4 Motherboard",
    },
    {
      link: "https://amzn.to/4ipnbj6",
      image: "/corsair-vengeance.webp",
      name: "Corsair Vengeance LPX",
      description: "32GB (2x16GB) DDR4-3200 CL16",
    },
    {
      link: "https://amzn.to/3For3lP",
      image: "/teamgroup-mp34.webp",
      name: "TEAMGROUP MP34 4TB",
      description: "M.2 NVME Solid State Drive",
    },
    {
      link: "https://amzn.to/3FpUDaD",
      image: "/samsung-970.webp",
      name: "Samsung 970 Evo 500GB",
      description: "M.2 NVME Solid State Drive",
    },
    {
      link: "https://amzn.to/4hgozTW",
      image: "/asus-rtx2080ti.webp",
      name: "Asus STRIX RTX 2080Ti",
      description: "11 GB Graphics Card",
    },
    {
      link: "https://amzn.to/4ipnuug",
      image: "/nzxt-h710.webp",
      name: "NZXT H710",
      description: "ATX Mid Tower Case",
    },
    {
      link: "https://amzn.to/3DrIu4E",
      image: "/corsair-sf750.webp",
      name: "Corsair SF750",
      description: "750W 80+ Gold Modular PSU",
    },
    {
      link: "https://amzn.to/4hgrpZ1",
      image: "/tp-link-wifi.webp",
      name: "TP-Link WiFi 6 AX3000",
      description: "WiFi 6.0 & Bluetooth 5.2 Adapter",
    },
    {
      link: "https://amzn.to/4i8Kiyo",
      image: "/windows10.webp",
      name: "Windows 11 Home",
      description: "Operating System",
    },
    {
      link: "https://amzn.to/3DzRncb",
      image: "/lg-ultragear-34.webp",
      name: 'LG UltraGear 34GS95QE-B 34"',
      description: "3440 x 1440 240 Hz OLED Monitor",
    },
    {
      link: "https://amzn.to/41wX6Yf",
      image: "/lg-27gl850.webp",
      name: 'LG 27GL850-B 27"',
      description: "2560 x 1440 144 Hz IPS Monitor",
    },
    {
      link: "https://www.amazon.com/gp/product/B07L8MLTGS/",
      image: "/vivo-ultrawide-arm.webp",
      name: "VIVO Premium Ultrawide Arm",
      description: "Single Wall Mount for 49\" Screens",
    },
    {
      link: "https://www.amazon.com/dp/B009S750LA/",
      image: "/vivo-dual-arm.webp",
      name: "VIVO Dual Monitor Mount",
      description: "Desk Stand for Two 30\" Screens",
    },
    {
      link: "https://amzn.to/3FgHmRR",
      image: "/razer-deathadder.webp",
      name: "Razer DeathAdder V3",
      description: "Wired Optical Mouse",
    },
    {
      link: "https://amzn.to/4ipooqE",
      image: "/logitech-pro-x.webp",
      name: "Logitech PRO X 2 LIGHTSPEED",
      description: "Gaming Headset",
    },
    {
      link: "https://amzn.to/3XyF0Uw",
      image: "/razer-huntsman.webp",
      name: "Razer Huntsman TE",
      description: "Optical Gaming Keyboard",
    },
  ];

  const gearItems = [
    {
      link: "https://www.apple.com/by/iphone-12/",
      image: "/iphone-12.webp",
      name: "Apple iPhone 12",
      description: "64GB, Black",
    },
    {
      link: "https://www.apple.com/by/airpods-pro/",
      image: "/airpods-pro.webp",
      name: "AirPods Pro",
      description: "2nd Generation",
    },
    {
      link: "https://amzn.to/43tv6HA",
      image: "/iron-flask.webp",
      name: "IRON FLASK 22oz",
      description: "Stainless Steel Water Bottle, Black",
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