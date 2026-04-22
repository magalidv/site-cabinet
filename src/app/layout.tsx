import "../styles/globals.css";
import { Space_Grotesk } from "next/font/google";

const space = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Cabinet Conseil",
  description: "Expertise et accompagnement",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" sizes="512x512" href="/android-chrome-512x512.png" />
      </head>
      <body className={space.className}>
        {children}
      </body>
    </html>
  );
}