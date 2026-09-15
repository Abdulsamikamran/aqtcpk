import { Space_Grotesk, JetBrains_Mono, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import LoaderSplash from "../components/loader-splash";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "AQTC – Advanced Quality Tax Consultants Pakistan",
  description:
    "Expert tax solutions for individuals and businesses in Pakistan. Income tax filing, business tax consultancy, GST registration, corporate compliance, and more.",
  keywords:
    "tax consultants Pakistan, income tax filing, FBR, NTN registration, GST, business tax, AQTC",
  openGraph: {
    title: "AQTC – Advanced Quality Tax Consultants Pakistan",
    description:
      "Expert tax solutions for individuals and businesses in Pakistan.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#07100f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${manrope.variable}`}
    >
      <body className="font-body antialiased bg-ink text-fg">
        <LoaderSplash />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
