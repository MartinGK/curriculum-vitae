import { buildMetadata } from "@/lib/metadata";
import { display, mono } from "@/lib/fonts";
import "../../globals.css";

export const metadata = buildMetadata("es");

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${display.variable} ${mono.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
