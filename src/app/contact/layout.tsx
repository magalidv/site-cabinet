import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact – Consultant Lean Manufacturing en Savoie | RD Conseil Lean",
  description: "Parlons de votre projet d'amélioration continue. Premier échange sans engagement, réponse sous 24h. Intervention en Savoie, Auvergne-Rhône-Alpes et en France. Contactez RD Conseil Lean.",
 };

export default function ContactLayout({ children }: { children: React.ReactNode }) {
   return <>{children}</>;
 }