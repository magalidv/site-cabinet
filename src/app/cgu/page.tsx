// src/app/cgu/page.tsx

import LegalLayout from "@/components/LegalLayout";

export default function CGUPage() {
  return (
    <LegalLayout title="Conditions Générales d'Utilisation">

      <h2>Objet</h2>

      <p>
        Les présentes conditions définissent les modalités d'utilisation du site.
      </p>
      <br/>
      <h2>Accès au site</h2>

      <p>
        Le site est accessible gratuitement à tout utilisateur disposant d'un
        accès Internet.
      </p>
      <br/>
      <h2>Responsabilité</h2>

      <p>
        RD Lean Conseil s'efforce de maintenir les informations à jour mais ne
        garantit pas leur exactitude permanente.
      </p>
      <br/>
      <h2>Droit applicable</h2>

      <p>
        Le présent site est soumis au droit français.
      </p>

    </LegalLayout>
  );
}