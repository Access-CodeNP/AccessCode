import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fafaf9",
};

export const metadata: Metadata = {
  title: {
    default: "Access Code — Technology that creates access for everyone",
    template: "%s | Access Code",
  },
  description:
    "Access Code builds inclusive digital solutions that reduce barriers and create better experiences for people with diverse abilities. Technology for everyone.",
  keywords: [
    "accessibility",
    "inclusive technology",
    "digital inclusion",
    "assistive technology",
    "startup",
  ],
  authors: [{ name: "Access Code" }],
  creator: "Access Code",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Access Code",
    title: "Access Code — Technology that creates access for everyone",
    description:
      "Building inclusive digital solutions that reduce barriers and create better experiences for everyone.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const themeScript = `(function(){try{var s=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme:dark)').matches;document.documentElement.dataset.theme=s==='dark'||s==='light'?s:d?'dark':'light'}catch(e){}})()`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-canvas text-ink antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
