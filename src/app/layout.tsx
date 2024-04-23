import "~/styles/globals.css";
import "@uploadthing/react/styles.css";
import { TopNav } from "./_components/TopNav";
import { ClerkProvider } from "@clerk/nextjs";

import { Inter } from "next/font/google";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";
import { Toaster } from "sonner";
import { CSPostHogProvider } from "./_analytics/provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Gallery",
  description: "A gallery!?",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <CSPostHogProvider>
        <html lang="en">
          <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
          <body
            className={`font-sans ${inter.variable} dark h-screen w-screen bg-black text-white`}
          >
            <TopNav />
            {props.children}
            {props.modal}
            <div id="modal-root" />
            <Toaster />
          </body>
        </html>
      </CSPostHogProvider>
    </ClerkProvider>
  );
}
