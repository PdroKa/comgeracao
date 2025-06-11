import type { Metadata } from "next";

export function getSEOTags({
    appTitle,
    appDescription,
    keywords,
    appDomain,
    canonicalUrlRelative,
    extraTags,
    locale,
}: {
    appTitle: string;
    appDescription: string;
    keywords: string[];
    appDomain: string;
    canonicalUrlRelative: string;
    extraTags?: Metadata;
    locale?: string;
}): Metadata {
    return {
        title: appTitle,
        description: appDescription,
        keywords: keywords.join(", "),
        applicationName: appTitle,
        metadataBase: new URL(appDomain),

        openGraph: {
            title: appTitle,
            description: appDescription,
            url: appDomain,
            siteName: appTitle,
            locale: locale,
            type: "website",
            images: [
                {
                    url: `${appDomain}/og-image.avif`,
                    width: 1200,
                    height: 630,
                    alt: `${appTitle} - ${appDescription} `,
                },

            ],
        },
        icons: {
            icon: "/favicon.ico",
            shortcut: "/web-app-manifest-192x192.png",
            apple: "/apple-icon.png",
        },

        twitter: {
            title: appTitle,
            description: appDescription,
            card: "summary_large_image",
            creator: "@",
        },

        alternates: {
            canonical: canonicalUrlRelative,
            languages: {
                pt: canonicalUrlRelative,
            },
        },

        ...extraTags,
    };
}