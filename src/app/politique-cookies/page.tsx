import LegalLayout from "@/components/LegalLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de cookies | RD Conseil Lean",
  robots: { index: false, follow: false },
};

export default function CookiesPage() {
  return (
    <LegalLayout title="Politique de cookies">

      <h2>Qu'est-ce qu'un cookie ?</h2>

      <p>
        Un cookie est un petit fichier texte déposé sur votre appareil
        lors de la visite d'un site web. Il permet de mémoriser des
        informations de navigation.
      </p>

      <h2>Cookies utilisés sur ce site</h2>

      <ul>
        <li>
          <strong>Cookies techniques</strong> (nécessaires) :
          indispensables au bon fonctionnement du site. Ils ne
          collectent aucune donnée personnelle.
        </li>

        <li>
          <strong>Cookies statistiques</strong> (Google Analytics) :
          permettent de mesurer l'audience du site de manière anonyme
          (pages visitées, durée de session, source de trafic). Ces
          données sont anonymisées et ne permettent pas de vous
          identifier personnellement.
        </li>
      </ul>

      <h2>Gestion de vos préférences</h2>

      <p>
        Vous pouvez à tout moment accepter ou refuser les cookies
        non essentiels depuis les paramètres de votre navigateur.
        Le refus des cookies statistiques n'affecte pas le
        fonctionnement du site.
      </p>

    </LegalLayout>
  );
}