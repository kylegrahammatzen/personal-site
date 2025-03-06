import { SiteContainer } from "@/components/site-container";
import { SitePageHeader } from "@/components/site-page-header";
import { SitePageSection } from "@/components/site-page-section";
import { SiteUsesGrid } from "@/components/site-uses-grid";

export default function UsesPage() {
  const softwareItems = [
    {
      link: "https://code.visualstudio.com/",
      image: "/images/uses/vscode.png",
      name: "VS Code",
      description: "My primary code editor with custom theme and extensions.",
    },
    {
      link: "https://www.figma.com/",
      image: "/images/uses/figma.png",
      name: "Figma",
      description: "For all design work and prototyping.",
    },
    {
      link: "https://www.notion.so/",
      image: "/images/uses/notion.png",
      name: "Notion",
      description: "For note-taking, documentation and project management.",
    },
    {
      link: "https://www.google.com/chrome/",
      image: "/images/uses/chrome.png",
      name: "Chrome",
      description: "Primary browser with dev tools and extensions.",
    },
  ];

  const desktopItems = [
    {
      link: "https://www.amd.com/en/products/cpu/amd-ryzen-9-3950x",
      image:
        "https://cdna.pcpartpicker.com/static/forever/images/product/bb4c0b72e3f78893b1e5b19ab570b2c1.256p.jpg",
      name: "AMD Ryzen 9 3950X",
      description: "16-Core Processor",
    },
    {
      link: "https://noctua.at/en/nh-d15-chromax-black",
      image: "https://m.media-amazon.com/images/I/51kgqhkUNuL.jpg",
      name: "Noctua NH-D15 chromax.black",
      description: "CPU Cooler",
    },
    {
      link: "https://www.msi.com/Motherboard/MPG-X570-GAMING-EDGE-WIFI",
      image:
        "https://cdna.pcpartpicker.com/static/forever/images/product/3deabe7b14a53642a29d3ff57a04bafa.256p.jpg",
      name: "MSI MPG X570 GAMING EDGE WIFI",
      description: "ATX AM4 Motherboard",
    },
    {
      link: "https://www.corsair.com/us/en/Categories/Products/Memory/vengeance-lpx-black",
      image:
        "https://cdna.pcpartpicker.com/static/forever/images/product/ae9c14173c768f2fa9ad4d3c957e94a0.256p.jpg",
      name: "Corsair Vengeance LPX 32 GB",
      description: "DDR4-3200 CL16 Memory (2 x 16 GB)",
    },
    {
      link: "https://www.teamgroupinc.com/en/product/mp34",
      image:
        "https://cdna.pcpartpicker.com/static/forever/images/product/bb4f2852e3f127d0c0165ab309427252.256p.jpg",
      name: "TEAMGROUP MP34 4 TB",
      description: "M.2 NVME Solid State Drive",
    },
    {
      link: "https://www.samsung.com/us/computing/memory-storage/solid-state-drives",
      image:
        "https://cdna.pcpartpicker.com/static/forever/images/product/25a1bf52562913032cce0b7a71b9e323.256p.jpg",
      name: "Samsung 970 Evo Plus 500 GB",
      description: "M.2 NVME Solid State Drive",
    },
    {
      link: "https://rog.asus.com/graphics-cards",
      image:
        "https://cdna.pcpartpicker.com/static/forever/images/product/0174f5005fe9f34decdf2d379bfe7221.256p.jpg",
      name: "Asus STRIX RTX 2080 Ti",
      description: "11 GB Graphics Card",
    },
    {
      link: "https://nzxt.com/product/h710",
      image:
        "https://cdna.pcpartpicker.com/static/forever/images/product/d69e9ad1af083ad57477ee88f6019412.256p.jpg",
      name: "NZXT H710",
      description: "ATX Mid Tower Case",
    },
    {
      link: "https://www.corsair.com/us/en/Categories/Products/Power-Supply-Units",
      image: "https://m.media-amazon.com/images/I/41XA+O8OFNL.jpg",
      name: "Corsair SF750",
      description: "750W 80+ Platinum Modular Power Supply",
    },
    {
      link: "https://www.tp-link.com/us/home-networking/pcie-adapter/tx401/",
      image:
        "https://cdna.pcpartpicker.com/static/forever/images/product/e0cd246e9392dfc4df3c23e27bb400e9.256p.jpg",
      name: "TP-Link TX401",
      description: "10 Gb/s Ethernet PCIe Network Adapter",
    },
    {
      link: "https://www.microsoft.com/en-us/windows",
      image:
        "https://cdna.pcpartpicker.com/static/forever/images/product/ed2349ecd618439a2aa96364e9445138.256p.jpg",
      name: "Windows 11 Home",
      description: "Operating System",
    },
    {
      link: "https://www.lg.com/us/monitors",
      image:
        "https://cdna.pcpartpicker.com/static/forever/images/product/f98e80f9443319f14b548ee54f378b29.256p.jpg",
      name: 'LG 27GL850-B 27"',
      description: "2560 x 1440 144 Hz Monitor (Secondary)",
    },
    {
      link: "https://www.lg.com/us/monitors/ultragear-gaming-monitors",
      image:
        "https://cdna.pcpartpicker.com/static/forever/images/product/1af1eac3d949ce16d0ca68a651b699f6.256p.jpg",
      name: 'LG UltraGear 34GS95QE-B 34"',
      description: "3440 x 1440 240 Hz Monitor (Primary)",
    },
    {
      link: "https://www.razer.com/gaming-mice/razer-deathadder-v3",
      image:
        "https://cdna.pcpartpicker.com/static/forever/images/product/527a2ec03a543912ea15c59764aeb279.256p.jpg",
      name: "Razer DeathAdder V3",
      description: "Wired Optical Mouse",
    },
    {
      link: "https://www.logitechg.com/en-us/products/gaming-audio/pro-x-wireless-headset.html",
      image:
        "https://cdna.pcpartpicker.com/static/forever/images/product/0654c2062080ded169e6bdc820f168eb.256p.jpg",
      name: "Logitech PRO X 2 LIGHTSPEED",
      description: "Gaming Headset",
    },
  ];

  const gearItems = [
    {
      link: "https://www.apple.com/iphone/",
      image:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTirHkA7UQS1RgwFuqM2CeHrrMzpdo9LhDd1OyQISp7JVxZdKYuCjuTXuYoJWAG8khEs3r1jzRzdVMxrtjnG5sRf0xbXAndDx90HvvsqeYrF4fHPSXghUE86g",
      name: "Apple iPhone 12",
      description: "64GB, Black",
    },
    {
      link: "https://www.apple.com/airpods-pro/",
      image:
        "https://cdna.pcpartpicker.com/static/forever/images/product/46632dbf7d4840e538ed4bebef93a348.256p.jpg",
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

      <SitePageSection>
        <h2 className="mb-4 text-xl font-semibold">Software</h2>
        <SiteUsesGrid items={softwareItems} />
      </SitePageSection>

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
