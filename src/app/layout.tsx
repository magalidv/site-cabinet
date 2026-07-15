import "../styles/globals.css";
import { Space_Grotesk } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

const space = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "RD Conseil Lean | Consultant Lean Manufacturing – Savoie",
    template: "%s | RD Conseil Lean",
  },
  description:
    "Cabinet de conseil indépendant en Lean Management et amélioration continue. Approche terrain, résultats mesurables. 10 ans d'expérience industrielle. PME/ETI en Savoie – Auvergne-Rhône-Alpes et en France.",
    url: "https://rd-conseil-lean.fr",
    siteName: "RD Conseil Lean",
    locale: "fr_FR",
    type: "website",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.ico", sizes: "32x32", type: "image/ico" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={space.className}>
        {children}
        <GoogleAnalytics gaId="G-45RYCZ4TRQ" />
      </body>
    </html>
  );
}