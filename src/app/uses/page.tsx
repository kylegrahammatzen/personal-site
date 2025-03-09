import { SiteContainer } from "@/components/site-container";
import { SiteItems } from "@/components/site-items";
import { SitePageHeader } from "@/components/site-page-header";
import { SitePageSection } from "@/components/site-page-section";
import { SiteUsesGrid } from "@/components/site-uses-grid";
import { createSoftwareItem } from "@/lib/item-creators";

export default function UsesPage() {
  const softwareItems = [
    createSoftwareItem({
      link: "https://www.figma.com/",
      name: "Figma",
      image: "/figma.webp",
      description: "For all design work and prototyping."
    }),
    createSoftwareItem({
      link: "https://cursor.com/",
      name: "Cursor",
      image: "/cursor.webp",
      description: "AI-powered code editor for improved productivity."
    }),
    createSoftwareItem({
      link: "https://discord.com/",
      name: "Discord",
      image: "/discord.webp",
      description: "Communication platform for gaming and communities."
    }),
    createSoftwareItem({
      link: "https://www.cloudflare.com/",
      name: "Cloudflare",
      image: "/cloudflare.webp",
      description: "Domain registration & management."
    }),
    createSoftwareItem({
      link: "https://previgil.com/",
      name: "Previgil",
      image: "/previgil.webp",
      description: "Domain monitoring with real-time updates."
    }),
    createSoftwareItem({
      link: "https://vercel.com/",
      name: "Vercel",
      image: "/vercel.webp",
      description: "For personal website & projects."
    }),
    createSoftwareItem({
      link: "https://laravel.com/",
      name: "Laravel",
      image: "/laravel.webp",
      description: "Framework for developing web applications."
    }),
    createSoftwareItem({
      link: "https://www.hetzner.com/",
      name: "Hetzner",
      image: "/hetzner.webp",
      description: "Bare-metal machines and cloud servers."
    }),
    createSoftwareItem({
      link: "https://www.google.com/chrome/",
      name: "Chrome",
      image: "/chrome.webp",
      description: "Primary browser with dev tools and extensions."
    })
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