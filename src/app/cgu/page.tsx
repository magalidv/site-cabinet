import LegalLayout from "@/components/LegalLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions générales d'utilisation | RD Conseil Lean",
  robots: { index: false, follow: false },
};

export default function CGUPage() {
  return (
    <LegalLayout title="Conditions générales d'utilisation">

      <h2>1. Objet</h2>

      <p>
        Les présentes Conditions Générales d'Utilisation (CGU)
        définissent les modalités d'accès et d'utilisation du site
        rd-conseil-lean.fr, édité par RD Conseil Lean (EURL),
        représentée par Rémy Dumoulin.
      </p>

      <h2>2. Accès au site</h2>

      <p>
        Le site est accessible gratuitement à tout utilisateur
        disposant d'un accès à Internet. RD Conseil Lean se réserve
        le droit de modifier, suspendre ou interrompre l'accès au
        site à tout moment, sans préavis.
      </p>

      <h2>3. Utilisation du site</h2>

      <p>
        L'utilisation du site est réservée à un usage personnel et
        non commercial. Toute utilisation frauduleuse, abusive ou
        contraire à la loi est interdite.
      </p>

      <h2>4. Responsabilité</h2>

      <p>
        RD Conseil Lean s'efforce de maintenir les informations
        publiées à jour et exactes, mais ne garantit pas leur
        exhaustivité ni leur permanence. L'utilisateur utilise le
        site sous sa propre responsabilité.
      </p>

      <h2>5. Propriété intellectuelle</h2>

      <p>
        L'ensemble du contenu du site est protégé par le droit de la
        propriété intellectuelle. Toute reproduction non autorisée est
        interdite. Voir les mentions légales pour plus de détails.
      </p>

      <h2>6. Droit applicable</h2>

      <p>
        Les présentes CGU sont régies par le droit français.
        Tout litige sera soumis aux juridictions françaises
        compétentes.
      </p>

      <h2>7. Modification des CGU</h2>

      <p>
        RD Conseil Lean se réserve le droit de modifier les présentes
        CGU à tout moment. Les modifications prennent effet dès leur
        publication sur le site.
      </p>

    </LegalLayout>
  );
}