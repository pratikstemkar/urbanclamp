import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Urban Clamp",
    description: "Home Service Management made easy!",
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
                <div>
                    <Navbar />
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    );
}
