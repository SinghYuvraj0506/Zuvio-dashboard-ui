import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-providers";
import clsx from "clsx";
import { ClerkProvider } from "@clerk/nextjs";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zuvio - Dashboard",
  description: "Zuvio - a website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={clsx(
            urbanist.className,
            "dark:bg-[#000] dark:text-white text-black bg-white overflow-x-hidden"
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            // enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
