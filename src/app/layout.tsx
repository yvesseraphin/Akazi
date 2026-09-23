import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const satoshi = localFont({
  src: "./fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  weight: "300 900",
  display: "swap",
  preload: true,
  fallback: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "sans-serif",
  ],
  adjustFontFallback: "Arial",
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
        <script
          dangerouslySetInnerHTML={{
            __html: `if(typeof window!=='undefined'&&typeof Node==='function'&&Node.prototype){const r=Node.prototype.removeChild;Node.prototype.removeChild=function(c){if(!c)return c;if(c.parentNode!==this){return c.parentNode?c.parentNode.removeChild(c):c;}return r.call(this,c);};const i=Node.prototype.insertBefore;Node.prototype.insertBefore=function(n,ref){if(ref&&ref.parentNode!==this){return ref.parentNode?ref.parentNode.insertBefore(n,ref):n;}return i.call(this,n,ref);};const o=new MutationObserver((m)=>{for(let j=0;j<m.length;j++){if(m[j].attributeName==='bis_skin_checked'){m[j].target.removeAttribute('bis_skin_checked');}}});o.observe(document.documentElement,{attributes:true,subtree:true,attributeFilter:['bis_skin_checked']});}`,
          }}
        />
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
