import "../styles/globals.css";
import { Inter, Audiowide } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const audiowide = Audiowide({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-audiowide",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://pmf-or-die.com"),
  title: "PMF OR DIE",
  description:
    "Construir solos es difícil, entonces por 45 días vamos a estar todos trabajando juntos por una sola meta: revenue. Al final los top 3 startups ganarán un demo frente a un grupo de ángeles y mentores.",
  openGraph: {
    images: "/info.png",
  },
  twitter: {
    card: "summary_large_image",
    images: "/info.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${audiowide.variable} font-sans bg-black`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
