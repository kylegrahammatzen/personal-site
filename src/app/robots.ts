import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    // Handle different environments
    const baseUrl = process.env.VERCEL_ENV === 'production'
        ? 'https://kylegm.com'
        : 'https://personal-site-git-main-kylegm.vercel.app'

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: `${baseUrl}/sitemap.xml`,
        host: baseUrl,
    }
}