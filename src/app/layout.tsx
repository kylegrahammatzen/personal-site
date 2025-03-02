import { ThemeProvider } from "@/providers/theme-provider";
import { SiteHeader } from "@/components/site-header";
import "@/styles/globals.css";

import localFont from 'next/font/local'

const metroSans = localFont({
  src: [
    {
      path: '../fonts/MetroSans-web.woff2',
      weight: '100 900',
      style: 'normal'
    },
    {
      path: '../fonts/MetroSans-web.woff',
      weight: '100 900',
      style: 'normal'
    }
  ],
  variable: '--font-metro-sans',
  display: 'swap'
})

type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout(props: RootLayoutProps) {
  return (
    <html lang='en' className={`${metroSans.variable}`}>
      <body>
        <div className='Root'>
          <ThemeProvider defaultTheme="dark">
            <div className="container mx-auto px-4 py-8 max-w-3xl">
              <SiteHeader />
              <main>{props.children}</main>
            </div>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}