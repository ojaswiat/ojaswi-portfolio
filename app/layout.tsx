import { Geist } from "next/font/google";
import { Suspense, type ReactNode } from "react";

import Providers from "./providers";

import AppFooter from "@/components/sections/AppFooter";
import TopNavbar from "@/components/sections/TopNavbar";
import NavigationProgress from "@/components/ui/NavigationProgress";
import "@/global/styles/global.scss";
import "./globals.css";

// Vercel sets it's own environment variables when deployed
const defaultUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

export const metadata = {
    metadataBase: new URL(defaultUrl),
    title: {
        template: "%s | Nexus",
        default: "Nexus",
    },
    description: "NextJS Supabase Starter",
};

const geistSans = Geist({
    display: "swap",
    subsets: ["latin"],
});

export default async function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html
            suppressHydrationWarning
            className={`${geistSans.className} h-screen w-screen`}
            lang="en"
        >
            <body className="w-full h-full flex flex-col">
                <Providers>
                    <Suspense>
                        <NavigationProgress />
                    </Suspense>
                    <TopNavbar />
                    <main className="w-full h-[85%] overflow-y-scroll bg-background text-foreground flex flex-col pt-4">
                        {children}
                    </main>
                    <AppFooter />
                </Providers>
            </body>
        </html>
    );
}
