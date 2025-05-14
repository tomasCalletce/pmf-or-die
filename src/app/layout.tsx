import "../styles/globals.css";
import { Inter, Audiowide } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const audiowide = Audiowide({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-audiowide",
  display: "swap",
});

export const metadata = {
  title: "PMF OR DIE",
  description:
    "Product Market Fit or Die - 45 días para crear un producto y llegar a revenue.",
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
      </body>
    </html>
  );
}
