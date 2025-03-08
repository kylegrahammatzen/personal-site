import { ThemeProvider } from "@/providers/theme-provider"
import { SiteHeader } from "@/components/site-header"
import "@/styles/globals.css"
import localFont from 'next/font/local'
import { Metadata } from "next"

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

// metadata
export const metadata: Metadata = {
  title: 'Kyle Matzen | Software Engineer & Entrepreneur',
  description: 'Software engineer building scalable systems and launching startups like Previgil, Bans.io, and MailCurate. Computer Science student at Rowan University working with clients worldwide.',
  keywords: ['software engineer', 'entrepreneur', 'founder', 'New Jersey', 'Rowan University', 'Previgil', 'Bans.io', 'MailCurate'],
  openGraph: {
    title: 'Kyle Matzen | Software Engineer & Entrepreneur',
    description: 'US-based engineer building scalable systems and launching startups that solve real business challenges.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kyle Matzen | Software Engineer & Entrepreneur',
    description: 'US-based engineer building scalable systems and launching startups that solve real business challenges.',
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: 'Kyle Matzen' }],
}

type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout(props: RootLayoutProps) {
  return (
    <html lang='en' className={`${metroSans.variable}`}>
      <body>
        <div className='Root'>
          <ThemeProvider defaultTheme="system">
            <div className="container mx-auto px-8 py-16 max-w-2xl">
              <SiteHeader />
              <main>{props.children}</main>
            </div>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}