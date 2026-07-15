import "../styles/globals.css";
import { Space_Grotesk } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

const space = Space_Grotesk({
  subsets: ["latin"],
});

export const metadata = {
  title: "RD Conseil Lean",
  description: "Amélioration continue & performance industrielle",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      {
        url: "/favicon-32x32.ico",
        sizes: "32x32",
        type: "image/ico",
      },
      {
        url: "/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      }
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={space.className}>
        {children}

        {/* Google Analytics */}
        <GoogleAnalytics gaId="G-45RYCZ4TRQ" />
      </body>
    </html>
  );
}
