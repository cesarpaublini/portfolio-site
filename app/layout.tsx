import "@/app/globals.css";
import Navbar from "@/components/layout/Navbar";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "Cesar Paublini | Portfolio",
  description: "Creative Technologist & Strategist",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="pt-[64px] bg-black dark:bg-zinc-900">
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
