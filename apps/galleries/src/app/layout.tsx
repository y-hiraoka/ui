import "./globals.css";
import { StinUIProvider } from "@y-hiraoka/ui/provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SideNav } from "../components/side-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "stin UI Gallery",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <StinUIProvider>
        <body className={`${inter.className} min-w-max`}>
          <div className="grid grid-cols-[auto_1fr]">
            <div className="p-2">
              <SideNav />
            </div>
            <main className="p-2">{children}</main>
          </div>
        </body>
      </StinUIProvider>
    </html>
  );
}
