// src/app/politique-cookies/page.tsx

import LegalLayout from "@/components/LegalLayout";

export default function CookiesPage() {
  return (
    <LegalLayout title="Politique de cookies">

      <h2>Qu'est-ce qu'un cookie ?</h2>

      <p>
        Un cookie est un petit fichier stocké sur votre appareil lors de votre navigation.
      </p>
      <br/>
      <h2>Cookies utilisés</h2>

      <ul>
        <li>Cookies techniques nécessaires au fonctionnement du site</li>
        <li>Cookies statistiques si Google Analytics est activé</li>
      </ul>
      <br/>
      <h2>Gestion des cookies</h2>

      <p>
        Vous pouvez accepter ou refuser les cookies depuis votre navigateur.
      </p>

    </LegalLayout>
  );
}