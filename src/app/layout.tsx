import "../styles/globals.css";
import { Space_Grotesk } from "next/font/google";

const space = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Cabinet Conseil",
  description: "Expertise et accompagnement",
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="fr">
      <body className={space.className}>
        {children}
      </body>
    </html>
  );
}