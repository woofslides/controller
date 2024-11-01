import type { Metadata } from "next";
import "./globals.css";
import { sans } from "./fonts";

export const metadata: Metadata = {
  title: "Woof Slides",
  description: "Woof Slides Viewer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark dark:dark">
      <body
        className={`${sans.className} antialiased dark:bg-neutral-950 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
