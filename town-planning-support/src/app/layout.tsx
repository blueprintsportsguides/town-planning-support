import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.townplanningsupport.co.uk"),
  title: {
    default: "Town Planning Support | Chartered Planning Consultants | Southern England",
    template: "%s | Town Planning Support",
  },
  description:
    "Expert Chartered Town Planning Consultants providing planning appraisals, applications, and appeals support across Southern England. MRTPI qualified with 35+ years experience.",
  keywords: [
    "town planning",
    "planning consultant",
    "planning application",
    "planning appeal",
    "planning appraisal",
    "MRTPI",
    "chartered town planner",
    "Southern England",
    "UK planning",
    "development planning",
    "planning permission",
  ],
  authors: [{ name: "Town Planning Support Ltd" }],
  creator: "Town Planning Support Ltd",
  publisher: "Town Planning Support Ltd",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.townplanningsupport.co.uk",
    siteName: "Town Planning Support",
    title: "Town Planning Support | Chartered Planning Consultants",
    description:
      "Expert Chartered Town Planning Consultants providing planning appraisals, applications, and appeals support across Southern England.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Town Planning Support - Chartered Planning Consultants",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Town Planning Support | Chartered Planning Consultants",
    description:
      "Expert Chartered Town Planning Consultants providing planning appraisals, applications, and appeals support across Southern England.",
    images: ["/og-image.jpg"],
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
