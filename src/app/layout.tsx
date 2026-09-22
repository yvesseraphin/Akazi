import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const satoshi = localFont({
  src: "./fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  weight: "300 900",
  display: "swap",
  preload: true,
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://akazi-germany.de";

export const viewport: Viewport = {
  themeColor: "#2F5D50",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Akazi Germany | Bilingual Apprentices from Rwanda for Companies in Germany",
    template: "%s | Akazi Germany",
  },
  description: "We connect German employers with vetted Rwandan apprentices for dual vocational training (Ausbildung) — certified B2 German, visa support, and full mentorship.",
  keywords: [
    "Ausbildung Germany",
    "Rwandan apprentices",
    "dual vocational training Germany",
    "German employers Rwandan talent",
    "bilingual apprentices Germany",
    "Akazi Germany",
    "Fachkräftemangel Lösung",
  ],
  authors: [{ name: "Akazi Germany" }],
  creator: "Akazi Germany",
  publisher: "Akazi Germany",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Akazi Germany",
    title: "Akazi Germany | Bilingual Apprentices from Rwanda for Companies in Germany",
    description: "We connect German employers with vetted Rwandan apprentices for dual vocational training (Ausbildung) — certified B2 German, visa support, and full mentorship.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akazi Germany | Bilingual Apprentices from Rwanda for Companies in Germany",
    description: "We connect German employers with vetted Rwandan apprentices for dual vocational training (Ausbildung) — certified B2 German, visa support, and full mentorship.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Akazi Germany",
      url: siteUrl,
      description: "Connecting German employers with vetted Rwandan apprentices for dual vocational training with certified B2 German and visa support.",
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Akazi Germany",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={satoshi.variable} suppressHydrationWarning>
      <head>
        {process.env.NODE_ENV === "development" && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  try {
                    var orig = Element.prototype.setAttribute;
                    Element.prototype.setAttribute = function(k, v) {
                      if (k === 'bis_skin_checked') return;
                      return orig.apply(this, arguments);
                    };
                    var obs = new MutationObserver(function(muts) {
                      for (var i = 0; i < muts.length; i++) {
                        var m = muts[i];
                        if (m.type === 'attributes' && m.attributeName === 'bis_skin_checked') {
                          m.target.removeAttribute('bis_skin_checked');
                        }
                      }
                    });
                    obs.observe(document.documentElement, { attributes: true, subtree: true, attributeFilter: ['bis_skin_checked'] });
                    window.addEventListener('load', function() {
                      setTimeout(function() {
                        obs.disconnect();
                      }, 2000);
                    });
                  } catch (e) {}
                })();
              `,
            }}
          />
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
