import { Analytics } from "@/components/Analytics";
import { buildMetadata } from "@/lib/metadata";
import { display, mono } from "@/lib/fonts";
import "../globals.css";

export const metadata = buildMetadata("en");

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${mono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
