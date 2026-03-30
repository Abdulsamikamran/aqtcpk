import { Inter, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
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
  themeColor: "#066787",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${poppins.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
