import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import StoreProvider from "@/store/StoreProvider";
import { Toaster } from "sonner";
import BottomNav from "./_components/BottomNav";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: {
        template: "%s - Urban Clamp",
        default: "Urban Clamp - Home Service Management made easy!",
    },
    description:
        "Book service partners for your home servicing needs at an affordable price. Don't waste your time in something you don't like. Spend your time for yourself and not for your home. We're there for your home.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} antialiased flex flex-col justify-between w-full min-h-screen`}
            >
                <StoreProvider>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="light"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <div>
                            <Navbar />
                            {children}
                        </div>
                        <Toaster />
                        <Footer />
                        <BottomNav />
                    </ThemeProvider>
                </StoreProvider>
            </body>
        </html>
    );
}
