import "~/styles/globals.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Gallery",
  description: "A gallery!?",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

function TopNav() {
  return (<nav className="bg-black text-white p-4 font-semibold border-b-neutral-600 border-b flex w-screen justify-between"><div>Gallery</div><div>Sign in</div></nav>)
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} h-screen w-screen bg-black text-white`}>
        <TopNav />
        {children}
      </body>
    </html>
  );
}
