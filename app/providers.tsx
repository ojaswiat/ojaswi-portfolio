"use client";

import type { ReactNode } from "react";

import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider } from "next-themes";

export default function Providers({ children }: { children: ReactNode }) {
    return (
        <HeroUIProvider className="h-full">
            <ThemeProvider
                disableTransitionOnChange
                enableSystem
                attribute="class"
                defaultTheme="system"
                themes={["light", "dark"]}
            >
                {children}
            </ThemeProvider>
        </HeroUIProvider>
    );
}
