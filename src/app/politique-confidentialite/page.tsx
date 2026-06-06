// src/app/politique-confidentialite/page.tsx

import LegalLayout from "@/components/LegalLayout";

export default function PrivacyPage() {
  return (
    <LegalLayout title="Politique de confidentialité">

      <h2>Données collectées</h2>

      <ul>
        <li>Nom</li>
        <li>Email</li>
        <li>Téléphone</li>
        <li>Société</li>
        <li>Message</li>
      </ul>
      <br/>
      <h2>Finalité</h2>

      <p>
        Les données sont utilisées uniquement afin de répondre à vos demandes
        et échanger dans le cadre de prestations de conseil.
      </p>
      <br/>
      <h2>Durée de conservation</h2>

      <p>
        Les données sont conservées pendant une durée maximale de 3 ans.
      </p>
      <br/>
      <h2>Vos droits</h2>

      <p>
        Vous pouvez demander l'accès, la modification ou la suppression de vos
        données à :
      </p>

      <p>
        contact@rd-lean-conseil.fr
      </p>

    </LegalLayout>
  );
}