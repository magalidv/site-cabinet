import LegalLayout from "@/components/LegalLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité | RD Conseil Lean",
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Politique de confidentialité">

      <h2>1. Responsable du traitement</h2>
      <p>
        RD Conseil Lean, EURL représentée par Rémy Dumoulin.
        Contact : contact@rd-conseil-lean.fr — 07 85 88 20 12.
      </p>

      <h2>2. Données collectées</h2>

      <p>
        Via le formulaire de contact, les données suivantes sont collectées :
      </p>

      <ul>
        <li>Nom et prénom</li>
        <li>Adresse email</li>
        <li>Numéro de téléphone (facultatif)</li>
        <li>Nom de l'entreprise (facultatif)</li>
        <li>Contenu du message</li>
      </ul>

      <p>
        Via Google Analytics : données de navigation anonymisées
        (pages visitées, durée de session, type d'appareil).
        Aucune donnée personnelle identifiable n'est collectée via cet outil.
      </p>

      <h2>3. Finalité du traitement</h2>

      <p>Les données sont utilisées pour :</p>

      <ul>
        <li>Répondre à vos demandes de contact</li>
        <li>Échanger dans le cadre d'une relation commerciale</li>
        <li>Améliorer le site (données statistiques anonymes)</li>
      </ul>

      <h2>4. Base légale</h2>

      <p>
        Le traitement des données du formulaire repose sur votre
        consentement explicite (case à cocher). Vous pouvez retirer
        ce consentement à tout moment.
      </p>

      <h2>5. Durée de conservation</h2>

      <p>
        Les données de contact sont conservées pendant une durée
        maximale de 3 ans à compter de votre dernière prise de contact.
      </p>

      <h2>6. Destinataires des données</h2>

      <p>
        Vos données ne sont jamais vendues, louées ou cédées à des tiers.
        Elles sont accessibles uniquement par RD Conseil Lean dans le
        cadre du traitement de votre demande.
      </p>

      <h2>7. Vos droits</h2>

      <p>
        Conformément au RGPD, vous disposez des droits suivants :
        accès, rectification, suppression, opposition, limitation
        du traitement et portabilité de vos données.
      </p>

      <p>
        Pour exercer ces droits, contactez-nous à :
        contact@rd-conseil-lean.fr
      </p>

      <p>
        Vous avez également le droit d'introduire une réclamation
        auprès de la CNIL (www.cnil.fr).
      </p>

    </LegalLayout>
  );
}