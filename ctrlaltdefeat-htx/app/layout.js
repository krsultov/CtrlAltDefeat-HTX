import {Inter} from "next/font/google";
import "./globals.css";
import Navigation from "@/app/(components)/Navigation";
import Footer from "@/app/(components)/Footer";
import Background from "@/app/(components)/Background";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "Baywatch",
    description: "Report, Create an event, make the sea a better place",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <div
            className="flex flex-col h-screen max-h-screen ">
            <Background/>
            <Navigation/>
            <div className="flex-grow overflow-y-auto bg-accent-1 text-default-text">
                {children}
            </div>
        </div>


        </body>
        </html>
    );
}
