import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://reverbacademy.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Music Classes in Mohali | Reverb Academy",
  description: "Learn guitar, ukulele, piano or violin at Reverb Academy in Mohali, at home across Chandigarh Tricity, or live online. Book a trial class.",
  applicationName: "Reverb Academy",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "website", locale: "en_IN", url: siteUrl, siteName: "Reverb Academy", title: "Music Classes in Mohali | Reverb Academy", description: "Structured guitar, ukulele, piano and violin lessons in Mohali, across Chandigarh Tricity and online." },
  twitter: { card: "summary", title: "Music Classes in Mohali | Reverb Academy", description: "Structured guitar, ukulele, piano and violin lessons in Mohali, across Chandigarh Tricity and online." },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebSite", "@id": `${siteUrl}/#website`, url: `${siteUrl}/`, name: "Reverb Academy", inLanguage: "en-IN", publisher: { "@id": `${siteUrl}/#organization` } },
    {
      "@type": ["EducationalOrganization", "MusicSchool"], "@id": `${siteUrl}/#organization`, name: "Reverb Academy", url: `${siteUrl}/`, telephone: "+91-77079-91919",
      description: "A music academy offering structured guitar, ukulele, piano and violin lessons in Mohali, home tuition across Chandigarh Tricity, and live online lessons.",
      areaServed: ["Mohali", "Sahibzada Ajit Singh Nagar", "Chandigarh Tricity"],
      hasOfferCatalog: { "@type": "OfferCatalog", name: "Music lessons", itemListElement: ["Guitar lessons", "Ukulele lessons", "Piano lessons", "Violin lessons", "Online music lessons", "Home music tuition"].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })) },
      department: [{ "@id": `${siteUrl}/#sector-69` }, { "@id": `${siteUrl}/#sector-113` }],
    },
    { "@type": "MusicSchool", "@id": `${siteUrl}/#sector-69`, name: "Reverb Academy — Sector 69", parentOrganization: { "@id": `${siteUrl}/#organization` }, url: `${siteUrl}/#locations`, telephone: "+91-77079-91919", address: { "@type": "PostalAddress", streetAddress: "1st Floor, Sovo International School, Sector 69", addressLocality: "Sahibzada Ajit Singh Nagar", addressRegion: "Punjab", postalCode: "160062", addressCountry: "IN" }, geo: { "@type": "GeoCoordinates", latitude: 30.6956682, longitude: 76.7217892 } },
    { "@type": "MusicSchool", "@id": `${siteUrl}/#sector-113`, name: "Reverb Academy — Sector 113", parentOrganization: { "@id": `${siteUrl}/#organization` }, url: `${siteUrl}/#locations`, telephone: "+91-77079-91919", address: { "@type": "PostalAddress", streetAddress: "45C, 3rd Floor, Bollywood Green City, Sector 113", addressLocality: "Mohali", addressRegion: "Punjab", addressCountry: "IN" } },
    ...["Guitar", "Ukulele", "Piano", "Violin"].map((instrument) => ({ "@type": "Course", "@id": `${siteUrl}/#${instrument.toLowerCase()}-lessons`, name: `${instrument} Lessons in Mohali and Online`, description: `Structured ${instrument.toLowerCase()} lessons for beginners and developing musicians at Reverb Academy.`, provider: { "@id": `${siteUrl}/#organization` }, educationalLevel: "Beginner to developing musician", availableLanguage: "English" })),
    { "@type": "FAQPage", "@id": `${siteUrl}/#faq`, mainEntity: [
      ["Which instruments do you teach?", "Reverb Academy teaches guitar, ukulele, piano and violin through practical, structured lessons."],
      ["Do you offer online music lessons?", "Yes. Live one-to-one online lessons include real-time feedback, a personal learning plan and flexible scheduling."],
      ["Do you provide home music tuition in Chandigarh Tricity?", "Yes. Home music tuition is available across Chandigarh Tricity, subject to tutor and location availability."],
      ["Where are your Mohali academies?", "Reverb Academy has locations in Sector 69 at Sovo International School and in Sector 113 at Bollywood Green City."],
      ["Can beginners book a trial class?", "Yes. Beginners can contact Reverb Academy by WhatsApp or phone to discuss the right instrument, format and starting point."],
    ].map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-IN"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />{children}</body></html>;
}
