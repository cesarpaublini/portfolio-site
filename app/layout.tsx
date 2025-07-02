import "@/app/globals.css";
import Navbar from "@/components/layout/Navbar";

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
      <body className="pt-[64px] bg-white dark:bg-zinc-900">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
