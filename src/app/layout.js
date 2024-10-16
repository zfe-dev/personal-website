import { Inter } from "next/font/google";
import "./globals.css";
import NavigationBarComponent from "@/components/core/navigationBar/NavigationBar";
import FooterComponent from "@/components/core/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Hi, I'm Baptiste!",
    description: "My personal website built to present my personal projetcs and contributions.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <link rel="icon" href="/icon.png" sizes="any" />
            <body className={inter.className} style={{ position: "relative" }}>
                <NavigationBarComponent />
                {children}
                <FooterComponent />
            </body>
        </html>
    );
}
