import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Solutions Lean Manufacturing – VSM, TPM, SMED, 5S | RD Conseil Lean",
  description: "Analyse VSM, diagnostic Lean, TPM, SMED, animation de la performance, optimisation d'implantations, CONWIP... Des solutions Lean adaptées à vos enjeux industriels. Résultats concrets dès les premières semaines.",
};
export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}