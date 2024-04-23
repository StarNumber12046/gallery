import "~/styles/globals.css";
import "@uploadthing/react/styles.css"
import { TopNav } from "./_components/TopNav";
import { ClerkProvider } from "@clerk/nextjs";

import { Inter } from "next/font/google";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Gallery",
  description: "A gallery!?",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};




export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <NextSSRPlugin 
          routerConfig={extractRouterConfig(ourFileRouter)}
        />
        <body
          className={`font-sans ${inter.variable} h-screen w-screen bg-black text-white`}
        >
          <TopNav />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
